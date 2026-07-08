import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'web3FormsSection',
  title: 'Web3Forms Section',
  type: 'object',
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'content', title: 'Content' },
    { name: 'ctas', title: 'CTAs' },
    { name: 'form', title: 'Form Settings' },
  ],
  fields: [
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [{type: 'cta'}],
      group: 'ctas',
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Send Message',
      group: 'form',
    }),
    defineField({
      name: 'formType',
      title: 'Form Type',
      description: 'Used to select the correct API key or subject line in the code. Defaults to "contact".',
      type: 'string',
      options: {
        list: [
          { title: 'General Contact', value: 'contact' },
          { title: 'Support / Get Help', value: 'support' },
        ],
      },
      initialValue: 'contact',
      group: 'form',
    }),
    defineField({
      name: 'redirectPath',
      title: 'Redirect Path',
      description: 'Optional path to redirect after submission (e.g. /thank-you)',
      type: 'string',
      group: 'form',
    }),
    defineField({
      name: 'customFields',
      title: 'Custom Form Fields',
      description: 'Define specific fields for this form. If empty, the default fields (Name, Email, Subject, Message) will be used.',
      type: 'array',
      group: 'form',
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
