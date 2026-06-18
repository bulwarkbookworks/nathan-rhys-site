import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'series',
  title: 'Series',
  type: 'document',
  orderings: [
    {
      title: 'Name, A-Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'reference',
      to: [{type: 'layout'}],
      description: 'The shared navigation and footer layout for this page.',
    }),
    defineField({
      name: 'books',
      title: 'Books',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'book'}]}],
    }),
  ],
})
