import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listSection',
  title: 'List Section',
  type: 'object',
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'content', title: 'Content' },
    { name: 'ctas', title: 'CTAs' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'internalLabel',
      title: 'Internal Label',
      type: 'string',
      description: 'Used for identification in the list of sections. Not displayed on the website.',
    }),
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
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {title: 'Large', value: 'large'},
          {title: 'Small', value: 'small'},
        ],
      },
      initialValue: 'large',
      group: 'content',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'string',
      options: {
        list: [
          {title: '1 column', value: '1'},
          {title: '2 columns', value: '2'},
          {title: '3 columns', value: '3'},
          {title: '4 columns', value: '4'},
        ],
      },
      initialValue: '1',
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
      of: [{type: 'cta'}, {type: 'mailerliteCTA'}],
      group: 'ctas',
    }),
    defineField({
      name: 'cssClasses',
      title: 'CSS Classes',
      type: 'string',
      description: 'Additional CSS classes to add to the section tag.',
      group: 'settings',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      internalLabel: 'internalLabel',
    },
    prepare({title, internalLabel}) {
      return {
        title: internalLabel || title || 'List Section',
        subtitle: internalLabel ? (title ? `List Section: ${title}` : 'List Section') : 'List Section',
      }
    },
  },
})
