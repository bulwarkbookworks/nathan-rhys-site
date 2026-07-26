import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'expandableImageSection',
  title: 'Expandable Image Section',
  type: 'object',
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'content', title: 'Content' },
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
      name: 'preImagesContent',
      title: 'Pre-Images Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'expandableImage'}]}],
      group: 'content',
    }),
    defineField({
      name: 'postImagesContent',
      title: 'Post-Images Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
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
        title: internalLabel || title || 'Expandable Image Section',
        subtitle: internalLabel ? (title ? `Expandable Image Section: ${title}` : 'Expandable Image Section') : 'Expandable Image Section',
      }
    },
  },
})
