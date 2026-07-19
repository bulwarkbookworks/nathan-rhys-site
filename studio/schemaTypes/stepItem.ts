import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stepItem',
  title: 'Step Item',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string',
      description: 'Used for identification in the Studio.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconType',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Image', value: 'image'},
          {title: 'Glyphicon', value: 'glyphicon'},
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'imageIcon',
      title: 'Image Icon',
      type: 'image',
      hidden: ({parent}) => parent?.iconType !== 'image',
    }),
    defineField({
      name: 'glyphicon',
      title: 'Glyphicon Class',
      type: 'string',
      description: 'e.g., bi-check, bi-star (using Bootstrap Icons)',
      hidden: ({parent}) => parent?.iconType !== 'glyphicon',
    }),
    defineField({
      name: 'shortBlurb',
      title: 'Short Blurb',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reasoning',
      title: 'Reasoning / Why this matters',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'screenshot',
      title: 'Screenshot',
      type: 'image',
    }),
    defineField({
      name: 'screenshotCaption',
      title: 'Screenshot Caption',
      type: 'string',
      hidden: ({parent}) => !parent?.screenshot,
    }),
    defineField({
      name: 'substeps',
      title: 'Substeps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'substep',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}]
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'title',
    },
  },
})
