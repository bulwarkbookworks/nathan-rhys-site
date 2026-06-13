import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  orderings: [
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Release Date, Newest',
      name: 'releaseDateDesc',
      by: [
        {field: 'releaseDate', direction: 'desc'},
        {field: 'title', direction: 'asc'},
      ],
    },
    {
      title: 'Release Date, Oldest',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseDate', direction: 'asc'},
        {field: 'title', direction: 'asc'},
      ],
    },
  ],
  fieldsets: [
    {
      name: 'releaseInfo',
      title: 'Release Information',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
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
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      fieldset: 'releaseInfo',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Actual Release Date',
      type: 'date',
      description: 'mm/dd/yyyy',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
      fieldset: 'releaseInfo',
    }),
    defineField({
      name: 'projectedRelease',
      title: 'Projected Release',
      type: 'string',
      description: 'e.g., Q3 2026',
      fieldset: 'releaseInfo',
    }),
    defineField({
      name: 'releaseDateTbd',
      title: 'Release Date TBD',
      type: 'boolean',
      description: 'Check if the release date is unknown',
      initialValue: false,
      fieldset: 'releaseInfo',
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'chapter'}]}],
    }),
  ],
})
