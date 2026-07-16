import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

export default defineType({
  name: 'standardPage',
  title: 'Standard Page',
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
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'mainClass',
      title: 'Main CSS Class',
      type: 'string',
      description: 'CSS class to be added to the <main> tag of the page.',
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
        {type: 'mailerliteSection'},
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
