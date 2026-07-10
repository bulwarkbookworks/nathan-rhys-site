import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mailerliteSection',
  title: 'MailerLite Section',
  type: 'object',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'form', title: 'Form' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'form',
      title: 'MailerLite Form',
      type: 'reference',
      to: [{type: 'mailerliteForm'}],
      group: 'form',
    }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
        ],
      },
      initialValue: 'center',
      group: 'settings',
    }),
  ],
})
