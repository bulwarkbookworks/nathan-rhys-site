import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listSection',
  title: 'List Section',
  type: 'object',
  fields: [
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [{type: 'listItem'}],
    }),
  ],
})
