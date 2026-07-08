import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listSection',
  title: 'List Section',
  type: 'object',
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'content', title: 'Content' },
    { name: 'ctas', title: 'CTAs' },
  ],
  fields: [
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'beforeContent',
      title: 'Content Before List',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [{type: 'listItem'}],
      group: 'content',
    }),
    defineField({
      name: 'afterContent',
      title: 'Content After List',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [{type: 'cta'}],
      group: 'ctas',
    }),
  ],
})
