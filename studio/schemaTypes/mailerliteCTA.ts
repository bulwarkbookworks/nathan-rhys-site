import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mailerliteCTA',
  title: 'MailerLite CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Subscribe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form',
      title: 'MailerLite Form',
      type: 'reference',
      to: [{type: 'mailerliteForm'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Ghost', value: 'ghost'},
        ],
      },
      initialValue: 'primary',
    }),
  ],
})
