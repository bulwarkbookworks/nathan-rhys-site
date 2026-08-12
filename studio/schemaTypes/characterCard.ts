import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'characterCard',
  title: 'Character Card',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptor',
      title: 'Descriptor',
      type: 'string',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'descriptor',
    },
  },
})
