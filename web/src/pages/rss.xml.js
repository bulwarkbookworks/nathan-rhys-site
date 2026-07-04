import rss from '@astrojs/rss';
import { client } from '../lib/sanity';

export async function GET(context) {
  const newsletters = await client.fetch(`*[_type == "newsletter"] | order(publishDate desc) {
    title,
    heading,
    "slug": slug.current,
    publishDate,
    kicker,
    "description": metadata.metaDescription,
  }`);

  return rss({
    title: 'Nathan Rhys Newsletter',
    description: 'Fantasy where meaning has weight. Newsletter entries from Nathan Rhys.',
    site: context.site,
    items: newsletters.map((newsletter) => {
      const date = new Date(newsletter.publishDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      
      return {
        title: newsletter.heading || newsletter.title,
        pubDate: new Date(newsletter.publishDate),
        description: newsletter.description || newsletter.kicker || '',
        link: `/newsletters/${year}/${month}/${newsletter.slug}`,
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
