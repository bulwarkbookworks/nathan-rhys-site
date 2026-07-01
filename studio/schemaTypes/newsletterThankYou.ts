import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

export default defineType({
  name: 'newsletterThankYou',
  title: 'Newsletter Thank You',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'layout', title: 'Layout'},
    {name: 'metadata', title: 'Metadata'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      initialValue: {current: 'thank-you'},
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'richTextSection'},
        {type: 'listSection'},
      ],
      group: 'content',
    }),
    defineField({
      name: 'excludeFromSitemap',
      title: 'Exclude from Sitemap',
      type: 'boolean',
      initialValue: true,
      description: 'If checked, this page will be excluded from the sitemap.',
      group: 'metadata',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'reference',
      to: [{type: 'layout'}],
      description: 'The shared navigation and footer layout for this page.',
      group: 'layout',
    }),
    displayLastUpdatedField('layout'),
    defineField({
      name: 'metadata',
      title: 'Page Metadata',
      type: 'metadata',
      group: 'metadata',
    }),
  ],
})
