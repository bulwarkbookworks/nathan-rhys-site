import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

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
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'releaseInfo', title: 'Release Info'},
    {name: 'ctas', title: 'Calls to Action'},
    {name: 'metadata', title: 'Metadata'},
  ],
  fieldsets: [
    {
      name: 'releaseInfo',
      title: 'Release Information',
    },
    {
      name: 'ctas',
      title: 'Calls to Action',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    displayLastUpdatedField('metadata'),
    defineField({
      name: 'metadata',
      title: 'Page Metadata',
      type: 'metadata',
      group: 'metadata',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Example: Book One of The Steward Chronicles',
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
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{type: 'series'}],
      group: 'content',
    }),
    defineField({
      name: 'featureKicker',
      title: 'Feature Section Kicker',
      type: 'string',
      description: 'The text above the title when this book is featured (e.g., Featured Novel)',
      initialValue: 'Featured Novel',
      group: 'content',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      rows: 5,
      group: 'content',
    }),
    defineField({
      name: 'status',
      title: 'Internal Status',
      type: 'string',
      fieldset: 'releaseInfo',
      description: 'Kept for Studio organization. Avoid rendering this publicly unless it is reader-friendly.',
      group: 'releaseInfo',
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
      group: 'releaseInfo',
    }),
    defineField({
      name: 'projectedRelease',
      title: 'Projected Release',
      type: 'string',
      description: 'e.g., Coming 2026',
      fieldset: 'releaseInfo',
      group: 'releaseInfo',
    }),
    defineField({
      name: 'releaseDateTbd',
      title: 'Release Date TBD',
      type: 'boolean',
      description: 'Check if the release date is unknown',
      initialValue: false,
      fieldset: 'releaseInfo',
      group: 'releaseInfo',
    }),
    defineField({
      name: 'ctas',
      title: 'Calls to Action',
      type: 'array',
      of: [{type: 'cta'}],
      group: 'ctas',
      fieldset: 'ctas',
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'chapter'}]}],
      group: 'content',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'richTextSection'},
        {type: 'listSection'},
      ],
      group: 'content',
    }),
  ],
})
