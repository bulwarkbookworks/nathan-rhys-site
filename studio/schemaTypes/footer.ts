import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Site Footer',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'navigationGroups',
      title: 'Navigation Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navigationGroup',
          fields: [
            {name: 'title', type: 'string', title: 'Group Heading'},
            {
              name: 'items',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'navItem',
                  fields: [
                    {name: 'label', type: 'string', title: 'Label'},
                    {name: 'link', type: 'link', title: 'Link Details'},
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            {name: 'platform', type: 'string', title: 'Platform Name (e.g. Twitter, RSS)'},
            {name: 'icon', type: 'string', title: 'Icon (Bootstrap Icon name, e.g. twitter, rss)'},
            {name: 'link', type: 'link', title: 'Link'},
            {name: 'openInNewTab', type: 'boolean', title: 'Open in new tab', initialValue: true},
            {name: 'enabled', type: 'boolean', title: 'Enabled', initialValue: true},
          ],
        },
      ],
    }),
    defineField({
      name: 'siteInfo',
      title: 'Publisher / Site Information',
      type: 'object',
      fields: [
        {name: 'publisherInfo', type: 'text', title: 'Publisher Information'},
        {name: 'copyrightNotice', type: 'string', title: 'Copyright Notice'},
        {name: 'shortDescription', type: 'text', title: 'Short Descriptive Text'},
      ],
    }),
    defineField({
      name: 'legalNavigation',
      title: 'Legal Navigation',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Group Heading'},
        {
          name: 'items',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'navItem',
              fields: [
                {name: 'label', type: 'string', title: 'Label'},
                {name: 'link', type: 'link', title: 'Link Details'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'copyrightArea',
      title: 'Copyright Area',
      type: 'object',
      fields: [
        {name: 'copyrightText', type: 'string', title: 'Copyright Text'},
        {name: 'publisherName', type: 'string', title: 'Publisher Name'},
        {name: 'secondaryText', type: 'string', title: 'Secondary Text (Optional)'},
      ],
    }),
  ],
})
