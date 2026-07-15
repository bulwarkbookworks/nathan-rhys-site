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
      name: 'internalLabel',
      title: 'Internal Label',
      type: 'string',
      description: 'Used for identification in the list of sections. Not displayed on the website.',
    }),
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
        title: internalLabel || title || 'MailerLite Section',
        subtitle: internalLabel ? (title ? `MailerLite Section: ${title}` : 'MailerLite Section') : 'MailerLite Section',
      }
    },
  },
})
