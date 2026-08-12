import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "2p1tkf9p",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2024-03-12", // use current date (YYYY-MM-DD) to target the latest API version
});

/**
 * Gets the site URL from environment variables and ensures it has a trailing slash.
 */
export function getSiteUrl(): string {
  const siteUrl = import.meta.env.SITE_URL || import.meta.env.SITE || '';
  if (!siteUrl) return '/';
  return siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;
}

// Fetch newsletters slug once for link resolution
const newslettersData = await client.fetch(`*[_type == "newsletters"][0]{ "slug": slug.current }`).catch(() => null);
export const NEWSLETTERS_SLUG = newslettersData?.slug || 'newsletters';

/**
 * Constructs an image URL builder instance for generating image URLs based on the provided client configuration.
 *
 * @param {Object} client - The client instance containing the configuration and methods needed to build image URLs.
 * @returns {Object} An instance of the image URL builder, providing methods to customize and construct URLs for images.
 */
const builder = imageUrlBuilder(client);

/**
 * Generates a URL for the given image source using the builder.
 *
 * @param {any} source - The image source object to generate the URL for.
 * @return {string} The generated image URL as a string.
 */
export function urlFor(source: any) {
  return builder.image(source);
}

/**
 * Generates a srcset attribute value for responsive images based on provided widths and an optional aspect ratio.
 *
 * @param {any} image - The image object used to generate the URLs.
 * @param {number[]} widths - Array of widths to generate the srcset for.
 * @param {number} [ratio] - Optional aspect ratio (height/width) to calculate corresponding heights.
 * @return {string} A srcset string containing URLs with their associated widths.
 */
export function generateSrcset(image: any, widths: number[], ratio?: number) {
  if (!image) return '';
  return widths
    .map((w) => {
      let b = urlFor(image).width(w).auto('format');
      if (ratio) b = b.height(Math.round(w * ratio));
      return `${b.url()} ${w}w`;
    })
    .join(', ');
}

export const BOOK_URL_PROJECTION = `
  _type == "book" => {
    "seriesSlug": series->slug.current
  }
`;

export const LINK_OBJECT_FIELDS = `
  ...,
  internal->{ 
    _type, 
    slug,
    publishDate,
    ${BOOK_URL_PROJECTION}
  }
`;

export const LINK_FIELDS = `
  label,
  link {
    ${LINK_OBJECT_FIELDS}
  }
`;

export const NAVIGATION_FIELDS = `
  items[]{
    ${LINK_FIELDS}
  }
`;

export const LAYOUT_QUERY_FRAGMENT = `
  layout->{
    ...,
    "faviconIcoUrl": faviconIco.asset->url,
    topNavigation->{
      ${NAVIGATION_FIELDS}
    }
  }
`;

export const GLOBAL_LAYOUT_QUERY = `
  *[_id == "layout"][0]{
    ...,
    "faviconIcoUrl": faviconIco.asset->url,
    topNavigation->{
      ${NAVIGATION_FIELDS}
    }
  }
`;

export const FOOTER_QUERY = `
  *[_id == "footer"][0]{
    navigationGroups[]{
      title,
      items[]{
        ${LINK_FIELDS}
      }
    },
    socialLinks[]{
      platform,
      icon,
      link {
        ${LINK_OBJECT_FIELDS}
      },
      openInNewTab,
      enabled
    },
    siteInfo{
      publisherInfo,
      copyrightNotice,
      shortDescription
    },
    legalNavigation{
      title,
      items[]{
        ${LINK_FIELDS}
      }
    },
    copyrightArea{
      copyrightText,
      publisherName,
      secondaryText
    }
  }
`;

export const CTA_FIELDS = `
  ...,
  link{
    ${LINK_OBJECT_FIELDS}
  },
  _type == "mailerliteCTA" => {
    form->{
      ...
    }
  }
`;

export const CTAS_FIELDS = `
  ctas[]{
    ${CTA_FIELDS}
  }
`;

export const SUMMARY_CARD_CTAS_FIELDS = `
  summaryCardCtas[]{
    ${CTA_FIELDS}
  }
`;

export const SECTION_FIELDS = `
    ...,
    cssClasses,
    ${CTAS_FIELDS},
    _type == "listSection" => {
      style,
      columns,
      beforeContent,
      items[]{
        ...,
        content,
        glyphiconColor
      },
      afterContent
    },
    _type == "richTextSection" => {
      content
    },
    _type == "cardsSection" => {
      ...,
      cards[]{
        ...,
        body,
        cta{
          ...,
          link{
            ${LINK_OBJECT_FIELDS}
          }
        }
      }
    },
    _type == "web3FormsSection" => {
      ...,
      form->{
        ...
      }
    },
    _type == "mailerliteSection" => {
      ...,
      form->{
        ...
      }
    },
    _type == "expandableImageSection" => {
      preImagesContent,
      images[]->,
      postImagesContent
    },
    _type == "characterCardsSection" => {
      ...,
      cards[]{
        ...
      }
    }
`;

export const SECTION_QUERY = `
  sections[]{
    ${SECTION_FIELDS}
  }
`;

export const HOW_I_WORK_QUERY = `
  *[_type == "howIWorkPage" && slug.current == $slug][0]{
    ...,
    journeySections[]{
      ${SECTION_FIELDS}
    },
    journeySteps[]->{
      ...,
      images[]->,
      substeps[]{
        ...
      }
    },
    workshopSections[]{
      ${SECTION_FIELDS}
    },
    workshopTools[]->{
      ...
    },
    postWorkshopSections[]{
      ${SECTION_FIELDS}
    }
  }
`;

/**
 * Constructs the URL for a given book based on its slug and series information.
 *
 * @param {object} book - The book object containing details such as slug and series.
 * @param {string} book.slug - The slug of the book, or an object containing a `current` property with the slug value.
 * @param {object} [book.series] - An optional series object containing a slug.
 * @param {string} [book.seriesSlug] - An optional series slug if the series object is not provided.
 * @return {string} The constructed URL for the book. Returns an empty string if the required data is not available.
 */
export function getBookUrl(book: any): string {
  if (!book) return '';
  
  const slug = book.slug?.current || book.slug;
  if (!slug) return '';
  
  const seriesSlug = 
    book.series?.slug?.current || 
    book.seriesSlug || 
    (typeof book.series === 'string' ? book.series : undefined);
    
  const siteUrl = getSiteUrl();
  const base = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

  if (seriesSlug) {
    return `${base}/${seriesSlug}/${slug}`;
  }
  return `${base}/${slug}`;
}

/**
 * Resolves a given link object or string into a URL string.
 *
 * @param {any} link The input link object or string. It can be a string, an external link, or an internal link object with specific types and properties.
 * @return {string} The resolved URL string. Returns an empty string if the input is invalid or if the required link information is not provided.
 */
export function resolveLink(link: any): string {
  if (!link) return '';
  
  let url = '';
  
  if (typeof link === 'string') {
    url = link;
  } else if (link.type === 'external') {
    return link.external || '';
  } else if (link.type === 'internal' && link.internal) {
    const doc = link.internal;
    url = '/';
    
    if (doc._type === 'book') {
      url = getBookUrl(doc);
    } else if (doc._type === 'home') {
      url = '/';
    } else if ((doc._type === 'standardPage' || doc._type === 'howIWorkPage') && doc.slug?.current) {
      url = `/${doc.slug.current}`;
    } else if (doc._type === 'thankYouPage' && doc.slug?.current) {
      url = `/${doc.slug.current}/thank-you`;
    } else if (doc._type === 'series' && doc.slug?.current) {
      // Assuming series might have pages later
      url = `/series/${doc.slug.current}`;
    } else if (doc._type === 'artist' && doc.slug?.current) {
      url = `/artists/${doc.slug.current}`;
    } else if (doc._type === 'artistsPage') {
      url = `/artists`;
    } else if (doc._type === 'galleryPage') {
      url = `/gallery`;
    } else if (doc._type === 'newsletters') {
      url = `/${NEWSLETTERS_SLUG}`;
    } else if (doc._type === 'newsletterThankYou') {
      url = `/${NEWSLETTERS_SLUG}/thank-you`;
    } else if (doc._type === 'newsletter') {
      const date = new Date(doc.publishDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      url = `/${NEWSLETTERS_SLUG}/${year}/${month}/${doc.slug?.current || doc.slug}`;
    } else if (doc._type === 'galleryItem' && doc.slug?.current) {
      url = `/gallery/${doc.slug.current}`;
    } else if (doc._type === 'chapter' && doc.slug?.current) {
      url = `/chapters/${doc.slug.current}`;
    }
    
    if (link.anchor) {
      const anchor = link.anchor.startsWith('#') ? link.anchor : `#${link.anchor}`;
      url += anchor;
    }
  }

  // If the URL is internal (starts with /) and not a protocol-relative URL (//)
  // we prepend the site URL to ensure it works correctly even when hosted on a subpath.
  if (url.startsWith('/') && !url.startsWith('//')) {
    const siteUrl = getSiteUrl();
    // siteUrl always ends with / per getSiteUrl(), so we remove it before prepending to url which starts with /
    return siteUrl.slice(0, -1) + url;
  }
  
  return url;
}
