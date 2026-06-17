import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'layout',
  title: 'Layout',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal name to identify this layout in the Studio.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topNavigation',
      title: 'Top Navigation',
      type: 'reference',
      to: [{type: 'navigation'}],
    }),
    defineField({
      name: 'bottomNavigation',
      title: 'Bottom Navigation',
      type: 'reference',
      to: [{type: 'navigation'}],
    }),
    defineField({
      name: 'bottomText',
      title: 'Bottom Text',
      type: 'string',
      description: 'The brand text shown in the footer. Example: Nathan Rhys',
      initialValue: 'Nathan Rhys',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Footer copyright line. Do not include the year — it is added automatically. Example: Nathan Rhys. All rights reserved.',
      initialValue: 'Nathan Rhys. All rights reserved.',
    }),
  ],
})
