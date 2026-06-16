import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pillar',
  title: 'Pillar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
