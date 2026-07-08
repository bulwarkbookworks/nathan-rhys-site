import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'web3Form',
  title: 'Web3Form',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (Internal)',
      type: 'string',
      description: 'Internal name for this form (e.g. "Main Contact Form")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'formId',
      title: 'Form ID',
      type: 'string',
      description: 'Used to select the environment variable (e.g. CONTACT -> WEB3FORMS_ACCESS_KEY_CONTACT).',
      options: {
        list: [
          { title: 'Contact', value: 'CONTACT' },
        ],
      },
      initialValue: 'CONTACT',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Send Message',
    }),
    defineField({
      name: 'redirectPath',
      title: 'Redirect Path',
      description: 'Optional path to redirect after submission (e.g. /thank-you)',
      type: 'string',
    }),
    defineField({
      name: 'customFields',
      title: 'Custom Form Fields',
      description: 'Define specific fields for this form. If empty, the default fields (Name, Email, Subject, Message) will be used.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'name', type: 'string', title: 'Field Name (e.g., "order_number")' },
          { 
            name: 'type', 
            type: 'string', 
            title: 'Type',
            options: { list: ['text', 'email', 'textarea', 'tel', 'number'] },
            initialValue: 'text'
          },
          { name: 'placeholder', type: 'string', title: 'Placeholder' },
          { name: 'required', type: 'boolean', title: 'Required', initialValue: true },
          { 
            name: 'width', 
            type: 'string', 
            title: 'Width',
            options: { list: ['full', 'half'] },
            initialValue: 'full'
          },
        ]
      }]
    })
  ],
})
