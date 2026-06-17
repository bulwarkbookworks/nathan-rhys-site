import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listItem',
  title: 'List Item',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'glyphicon',
      title: 'Glyphicon Class',
      type: 'string',
      description: 'e.g., bi-check, bi-star (using Bootstrap Icons)',
    }),
    defineField({
      name: 'glyphiconColor',
      title: 'Glyphicon Color',
      type: 'string',
      options: {
        list: [
          {title: 'Default (Gold) - rgb(214, 177, 95)', value: 'secondary'},
          {title: 'Accent (Teal) - rgb(117, 215, 208)', value: 'accent'},
          {title: 'Rust - rgb(123, 47, 36)', value: 'rust'},
          {title: 'Text Main - rgb(242, 234, 220)', value: 'text-main'},
          {title: 'Text Muted - rgb(184, 200, 187)', value: 'text-muted'},
          {title: 'Red', value: 'red'},
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Purple', value: 'purple'},
          {title: 'Orange', value: 'orange'},
        ],
      },
      initialValue: 'secondary',
    }),
  ],
})
