import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

const pageSections = [
  {type: 'richTextSection'},
  {type: 'listSection'},
  {type: 'cardsSection'},
  {type: 'web3FormsSection'},
  {type: 'mailerliteSection'},
]

export default defineType({
  name: 'howIWorkPage',
  title: 'How I Work Page',
  type: 'document',
  groups: [
    {name: 'general', title: 'General'},
    {name: 'journey', title: 'Journey'},
    {name: 'workshop', title: 'Workshop'},
    {name: 'postWorkshop', title: 'Post-Workshop'},
    {name: 'metadata', title: 'Metadata'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
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
      group: 'general',
    }),
    defineField({
      name: 'mainClass',
      title: 'Main CSS Class',
      type: 'string',
      description: 'CSS class to be added to the <main> tag of the page.',
      group: 'general',
    }),
    displayLastUpdatedField('general'),
    defineField({
      name: 'metadata',
      title: 'Page Metadata',
      type: 'metadata',
      group: 'metadata',
    }),

    // Journey Group
    defineField({
      name: 'journeySections',
      title: 'Journey Sections',
      type: 'array',
      of: pageSections,
      group: 'journey',
    }),
    defineField({
      name: 'journeySteps',
      title: 'Journey Steps',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'stepItem'}]}],
      group: 'journey',
    }),

    // Workshop Group
    defineField({
      name: 'workshopSections',
      title: 'Workshop Sections',
      type: 'array',
      of: pageSections,
      group: 'workshop',
    }),
    defineField({
      name: 'workshopTools',
      title: 'Workshop Tools',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'toolItem'}]}],
      group: 'workshop',
    }),

    // Post-Workshop Sections
    defineField({
      name: 'postWorkshopSections',
      title: 'Post-Workshop Sections',
      type: 'array',
      of: pageSections,
      group: 'postWorkshop',
    }),
  ],
})
