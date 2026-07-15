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
        title: internalLabel || title || 'Web3Forms Section',
        subtitle: internalLabel ? (title ? `Web3Forms Section: ${title}` : 'Web3Forms Section') : 'Web3Forms Section',
      }
    },
  },
})
