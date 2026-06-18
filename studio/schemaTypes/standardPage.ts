import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'standardPage',
  title: 'Standard Page',
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
        {type: 'buttondownEmbedSection'},
      ],
      group: 'content',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'reference',
      to: [{type: 'layout'}],
      description: 'The shared navigation and footer layout for this page.',
      group: 'layout',
    }),
    defineField({
      name: 'metadata',
      title: 'Page Metadata',
      type: 'metadata',
      group: 'metadata',
    }),
  ],
})
