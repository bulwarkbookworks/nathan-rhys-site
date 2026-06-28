import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Display Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    }),
    displayLastUpdatedField(),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'associatedSeries',
      title: 'Associated Series',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'series'}]}],
    }),
    defineField({
      name: 'associatedBooks',
      title: 'Associated Books',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'book'}]}],
    }),
    defineField({
      name: 'copyrightDate',
      title: 'Copyright Date',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
    }),
    defineField({
      name: 'usageCategory',
      title: 'Usage Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Cover', value: 'cover'},
          {title: 'Concept', value: 'concept'},
          {title: 'Interior', value: 'interior'},
          {title: 'Promotional', value: 'promotional'},
        ],
      },
    }),
  ],
})
