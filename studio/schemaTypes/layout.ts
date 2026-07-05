import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'layout',
  title: 'Site Layout',
  type: 'document',
  groups: [
    {
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'logos',
      title: 'Logos & Favicons',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Main Site Layout',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'topNavigation',
      title: 'Top Navigation',
      type: 'reference',
      to: [{type: 'navigation'}],
      group: 'navigation',
    }),
    defineField({
      name: 'logoOriginal',
      title: 'Original (800x800)',
      type: 'image',
      group: 'logos',
    }),
    defineField({
      name: 'logoAndroidChrome512',
      title: 'Android Chrome (512x512)',
      type: 'image',
      group: 'logos',
    }),
    defineField({
      name: 'logoAndroidChrome192',
      title: 'Android Chrome (192x192)',
      type: 'image',
      group: 'logos',
    }),
    defineField({
      name: 'logoAppleTouch',
      title: 'Apple Touch Icon',
      type: 'image',
      group: 'logos',
    }),
    defineField({
      name: 'faviconIco',
      title: 'Favicon (ico)',
      type: 'file',
      options: {
        accept: '.ico',
      },
      group: 'logos',
    }),
    defineField({
      name: 'favicon16',
      title: 'Favicon (16x16 png)',
      type: 'image',
      options: {
        accept: 'image/png',
      },
      group: 'logos',
    }),
    defineField({
      name: 'favicon32',
      title: 'Favicon (32x32 png)',
      type: 'image',
      options: {
        accept: 'image/png',
      },
      group: 'logos',
    }),
  ],
})
