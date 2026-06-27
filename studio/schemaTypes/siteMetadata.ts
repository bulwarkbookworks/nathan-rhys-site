import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteMetadata',
  title: 'Default Site Metadata',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal name for the default site metadata.',
      initialValue: 'Default Site Metadata',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata',
    }),
  ],
})
