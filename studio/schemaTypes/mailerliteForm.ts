import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mailerliteForm',
  title: 'MailerLite Form',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (Internal)',
      type: 'string',
      description: 'Internal name for this form (e.g. "Newsletter Signup")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'formId',
      title: 'Form ID',
      type: 'string',
      description: 'The MailerLite form ID (e.g. from the data-form attribute).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accountId',
      title: 'Account ID',
      type: 'string',
      description: 'The MailerLite Account ID (optional if set in env vars).',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description for internal use.',
    }),
  ],
})
