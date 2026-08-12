import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'characterCardsSection',
  title: 'Character Cards Section',
  type: 'object',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'content', title: 'Content'},
    {name: 'settings', title: 'Settings'},
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
      name: 'beforeContent',
      title: 'Before Cards Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'cards',
      title: 'Character Cards',
      type: 'array',
      of: [{type: 'characterCard'}],
      group: 'content',
    }),
    defineField({
      name: 'afterContent',
      title: 'After Cards Content',
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
      subtitle: 'kicker',
    },
    prepare({title, internalLabel, subtitle}) {
      return {
        title: internalLabel || title || 'Character Cards Section',
        subtitle: internalLabel
          ? title
            ? `Character Cards Section: ${title}`
            : 'Character Cards Section'
          : subtitle || 'Section with character cards',
      }
    },
  },
})
