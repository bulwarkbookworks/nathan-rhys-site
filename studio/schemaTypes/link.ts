import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal Page', value: 'internal'},
          {title: 'External URL', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internal',
      title: 'Internal Page',
      type: 'reference',
      to: [{type: 'home'}, {type: 'book'}, {type: 'series'}, {type: 'buttondownEmbed'}, {type: 'standardPage'}, {type: 'artist'}, {type: 'artistsPage'}],
      hidden: ({parent}) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'anchor',
      title: 'Anchor',
      type: 'string',
      description: 'Optional: add an anchor (e.g. #section-id)',
      hidden: ({parent}) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'external',
      title: 'External URL',
      type: 'url',
      hidden: ({parent}) => parent?.type !== 'external',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
    }),
  ],
})
