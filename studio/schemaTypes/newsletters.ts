import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

export default defineType({
  name: 'newsletters',
  title: 'Newsletters',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'metadata', title: 'Metadata'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      initialValue: {current: 'newsletters'},
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'richTextSection'},
        {type: 'listSection'},
        {type: 'cardsSection'},
        {type: 'web3FormsSection'},
      ],
      group: 'content',
    }),
    displayLastUpdatedField('metadata'),
    defineField({
      name: 'metadata',
      title: 'Page Metadata',
      type: 'metadata',
      group: 'metadata',
    }),
  ],
})
