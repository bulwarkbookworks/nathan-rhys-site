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
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      description:
        'How this form is triggered from a CTA button. "Pop-up" opens a MailerLite pop-up form directly. "Embedded" opens an embedded form inside a modal (use this when you need the form to redirect to a success page after signup).',
      options: {
        list: [
          {title: 'Pop-up', value: 'popup'},
          {title: 'Embedded (modal)', value: 'embedded'},
        ],
        layout: 'radio',
      },
      initialValue: 'popup',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description for internal use.',
    }),
  ],
})
