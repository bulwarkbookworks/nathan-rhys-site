import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'thankYouPage',
  title: 'Thank You Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'metadata', title: 'Metadata'},
  ],
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string',
      description: 'Used for organization within the Studio.',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The title displayed publicly on the page (H1).',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'internalTitle',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'richTextSection'},
        {type: 'listSection'},
        {type: 'cardsSection'},
        {type: 'web3FormsSection'},
      ],
      group: 'content',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Specifically for the browser title.',
      group: 'metadata',
    }),
    defineField({
      name: 'excludeFromSitemap',
      title: 'Exclude from Sitemap',
      type: 'boolean',
      initialValue: true,
      description: 'If checked, this page will be excluded from the sitemap.',
      group: 'metadata',
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'title',
    },
  },
})
