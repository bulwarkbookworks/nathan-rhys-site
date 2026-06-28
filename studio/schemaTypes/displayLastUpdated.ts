import {defineField} from 'sanity'

export const displayLastUpdatedField = (group?: string) => defineField({
  name: 'displayLastUpdated',
  title: 'Display Last Updated Date',
  type: 'boolean',
  initialValue: false,
  group,
})
