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
      name: 'redirectPath',
      title: 'Redirect Path',
      description: 'Optional path to redirect after submission (e.g. /thank-you)',
      type: 'string',
      group: 'form',
    }),
  ],
})
