import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string',
      description: 'Used for organization within the Studio.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'graphicType',
      title: 'Graphic Type',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Glyphicon', value: 'glyphicon'},
          {title: 'Icon (Image)', value: 'icon'},
        ],
        layout: 'radio',
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'glyphicon',
      title: 'Glyphicon Class',
      type: 'string',
      description: 'e.g., bi-check, bi-star (using Bootstrap Icons)',
      hidden: ({parent}) => parent?.graphicType !== 'glyphicon',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      hidden: ({parent}) => parent?.graphicType !== 'icon',
    }),
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Card Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'cta',
      title: 'Card CTA',
      type: 'cta',
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'title',
      media: 'icon',
    },
  },
})
