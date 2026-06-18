import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "2p1tkf9p",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-03-12", // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function getBookUrl(book: any): string {
  if (!book?.slug?.current) return '';
  const seriesSlug = book.series?.slug?.current || book.seriesSlug;
  if (seriesSlug) {
    return `/${seriesSlug}/${book.slug.current}`;
  }
  return `/${book.slug.current}`;
}

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
