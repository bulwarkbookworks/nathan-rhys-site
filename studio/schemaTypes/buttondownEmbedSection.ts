import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'buttondownEmbedSection',
  title: 'Buttondown Embed Section',
  type: 'object',
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'content', title: 'Content' },
    { name: 'ctas', title: 'CTAs' },
  ],
  fields: [
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'embed',
      title: 'Buttondown Embed',
      type: 'reference',
      to: [{type: 'buttondownEmbed'}],
      group: 'content',
    }),
    defineField({
      name: 'displayType',
      title: 'Display Type',
      type: 'string',
      options: {
        list: [
          {title: 'Form', value: 'form'},
          {title: 'Iframe', value: 'iframe'},
        ],
        layout: 'radio',
      },
      initialValue: 'form',
      group: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [{type: 'cta'}],
      group: 'ctas',
    }),
  ],
})
