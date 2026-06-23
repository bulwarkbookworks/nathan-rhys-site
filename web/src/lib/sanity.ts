import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "2p1tkf9p",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-03-12", // use current date (YYYY-MM-DD) to target the latest API version
});

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
    
  if (seriesSlug) {
    return `/${seriesSlug}/${slug}`;
  }
  return `/${slug}`;
}

/**
 * Resolves a given link object or string into a URL string.
 *
 * @param {any} link The input link object or string. It can be a string, an external link, or an internal link object with specific types and properties.
 * @return {string} The resolved URL string. Returns an empty string if the input is invalid or if the required link information is not provided.
 */
export function resolveLink(link: any): string {
  if (!link) return '';
  if (typeof link === 'string') return link;
  
  if (link.type === 'external') {
    return link.external || '';
  }
  
  if (link.type === 'internal' && link.internal) {
    const doc = link.internal;
    let url = '/';
    
    if (doc._type === 'book') {
      url = getBookUrl(doc);
    } else if (doc._type === 'home') {
      url = '/';
    } else if (doc._type === 'standardPage' && doc.slug?.current) {
      url = `/${doc.slug.current}`;
    } else if (doc._type === 'series' && doc.slug?.current) {
      // Assuming series might have pages later
      url = `/series/${doc.slug.current}`;
    } else if (doc._type === 'artist' && doc.slug?.current) {
      url = `/artists/${doc.slug.current}`;
    } else if (doc._type === 'artistsPage') {
      url = `/artists`;
    } else if (doc._type === 'buttondownEmbed') {
      const username = doc.username?.current || doc.username;
      if (username) {
        url = `https://buttondown.com/${username}`;
      }
    }
    
    if (link.anchor) {
      const anchor = link.anchor.startsWith('#') ? link.anchor : `#${link.anchor}`;
      url += anchor;
    }
    
    return url;
  }
  
  return '';
}
