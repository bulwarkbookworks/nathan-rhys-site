import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cardsSection',
  title: 'Cards Section',
  type: 'object',
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'content', title: 'Content' },
    { name: 'settings', title: 'Settings' },
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
      name: 'columns',
      title: 'Columns',
      type: 'string',
      options: {
        list: [
          {title: '2 Columns', value: '2'},
          {title: '3 Columns', value: '3'},
          {title: '4 Columns', value: '4'},
        ],
        layout: 'radio',
      },
      initialValue: '3',
      group: 'settings',
    }),
    defineField({
      name: 'beforeContent',
      title: 'Before Cards Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'card'}],
      group: 'content',
    }),
    defineField({
      name: 'afterContent',
      title: 'After Cards Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'kicker',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Cards Section',
        subtitle: subtitle || 'Section with cards',
      }
    },
  },
})
