import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Main Navigation',
    }),
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'link', type: 'link', title: 'Link Details'},
          ],
        },
      ],
    }),
  ],
})