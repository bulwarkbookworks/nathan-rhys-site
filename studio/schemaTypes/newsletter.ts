import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

export default defineType({
  name: 'newsletter',
  title: 'Newsletter Article',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'email', title: 'Email'},
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
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'H1 for the entire page',
      group: 'content',
    }),
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'sendEmail',
      title: 'Send Email',
      type: 'boolean',
      initialValue: false,
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
      name: 'subject',
      title: 'Subject',
      type: 'string',
      group: 'email',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
      group: 'email',
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
  preview: {
    select: {
      title: 'title',
      date: 'publishDate',
    },
    prepare({title, date}) {
      return {
        title,
        subtitle: date,
      }
    },
  },
})
