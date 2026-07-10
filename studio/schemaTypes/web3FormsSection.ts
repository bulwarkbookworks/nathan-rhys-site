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
      title: 'Body Content (Code)',
      description: 'Enter text or code to display before the form.',
      type: 'code',
      options: {
        withFilename: true,
      },
      group: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [{type: 'cta'}, {type: 'mailerliteCTA'}],
      group: 'ctas',
    }),
    defineField({
      name: 'form',
      title: 'Form',
      type: 'reference',
      to: [{type: 'web3Form'}],
      group: 'form',
    }),
  ],
})
