import {defineField, defineType} from 'sanity'
import {displayLastUpdatedField} from './displayLastUpdated'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'metadata', title: 'Metadata'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Display Name / Handle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Optional. A default image will be shown if not uploaded.',
      options: {
        hotspot: true,
      },
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      description: "Optional rich text / how I've used this artist",
      group: 'content',
    }),
    defineField({
      name: 'associatedBooks',
      title: 'Associated Books',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'book'}]}],
      group: 'content',
    }),
    defineField({
      name: 'associatedSeries',
      title: 'Associated Series',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'series'}]}],
      group: 'content',
    }),
    defineField({
      name: 'socialUrls',
      title: 'Social URLs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialUrl',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Web', value: 'web'},
                  {title: 'Art Station', value: 'artstation'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'YouTube', value: 'youtube'},
                ],
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'link.external',
            },
          },
        },
      ],
      group: 'content',
    }),
  ],
})
