import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'layout',
  title: 'Site Layout',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Main Site Layout',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'topNavigation',
      title: 'Top Navigation',
      type: 'reference',
      to: [{type: 'navigation'}],
    }),
  ],
})
