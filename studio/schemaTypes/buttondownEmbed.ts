import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'buttondownEmbed',
  title: 'Buttondown Embed',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Internal name for this embed',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'slug',
      description: 'Your Buttondown username slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailLabel',
      title: 'Email Label',
      type: 'string',
      initialValue: 'Enter your email',
    }),
  ],
})
