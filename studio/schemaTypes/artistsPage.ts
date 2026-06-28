import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

export default defineType({
  name: 'artistsPage',
  title: 'Artists Listing Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'layout', title: 'Layout'},
    {name: 'metadata', title: 'Metadata'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      initialValue: 'The Artists',
      group: 'content',
    }),
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      initialValue: 'Collaborators',
      group: 'content',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'reference',
      to: [{type: 'layout'}],
      description: 'The shared navigation and footer layout for this page.',
      group: 'layout',
    }),
    displayLastUpdatedField('layout'),
    defineField({
      name: 'metadata',
      title: 'Page Metadata',
      type: 'metadata',
      group: 'metadata',
    }),
  ],
})
