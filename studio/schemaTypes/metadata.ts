import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'twitter', title: 'Twitter/X' },
    { name: 'og', title: 'Open Graph' },
  ],
  fields: [
    // General
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'general',
    }),
    // Twitter
    defineField({
      name: 'twitterTitle',
      title: 'Twitter Title',
      type: 'string',
      group: 'twitter',
    }),
    defineField({
      name: 'twitterDescription',
      title: 'Twitter Description',
      type: 'text',
      rows: 3,
      group: 'twitter',
    }),
    defineField({
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'image',
      group: 'twitter',
    }),
    defineField({
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'string',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
        ],
      },
      group: 'twitter',
    }),
    // OG
    defineField({
      name: 'ogTitle',
      title: 'OG Title',
      type: 'string',
      group: 'og',
    }),
    defineField({
      name: 'ogDescription',
      title: 'OG Description',
      type: 'text',
      rows: 3,
      group: 'og',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      group: 'og',
    }),
    defineField({
      name: 'ogType',
      title: 'OG Type',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Article', value: 'article' },
          { title: 'Book', value: 'book' },
        ],
      },
      group: 'og',
    }),
  ],
})
