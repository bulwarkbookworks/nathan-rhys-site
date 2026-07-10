import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemaTypes'
import './styles/main.scss'

export default defineConfig({
  name: 'default',
  title: 'Nathan Rhys',

  projectId: '2p1tkf9p',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton Home Page
            S.listItem()
              .title('Home Page')
              .id('home')
              .child(S.document().schemaType('home').documentId('home')),
            S.divider(),
            // Pages Group
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.documentTypeListItem('book'),
                    S.documentTypeListItem('series'),
                    S.documentTypeListItem('standardPage'),
                    S.documentTypeListItem('chapter'),
                  ]),
              ),
            // Gallery Group
            S.listItem()
              .title('Gallery')
              .child(
                S.list()
                  .title('Gallery')
                  .items([
                    S.listItem()
                      .title('Artists Listing Page')
                      .id('artistsPage')
                      .child(S.document().schemaType('artistsPage').documentId('artistsPage')),
                    S.listItem()
                      .title('Gallery Landing Page')
                      .id('galleryPage')
                      .child(S.document().schemaType('galleryPage').documentId('galleryPage')),
                    S.divider(),
                    S.documentTypeListItem('artist'),
                    S.documentTypeListItem('galleryItem'),
                  ]),
              ),
            // Newsletters Group
            S.listItem()
              .title('Newsletters')
              .child(
                S.list()
                  .title('Newsletters')
                  .items([
                    S.listItem()
                      .title('Newsletters Landing Page')
                      .id('newsletters')
                      .child(S.document().schemaType('newsletters').documentId('newsletters')),
                    S.listItem()
                      .title('Newsletter Thank You Page')
                      .id('newsletterThankYou')
                      .child(S.document().schemaType('newsletterThankYou').documentId('newsletterThankYou')),
                    S.divider(),
                    S.documentTypeListItem('newsletter'),
                  ]),
              ),
            S.documentTypeListItem('thankYouPage').title('Thank You Pages'),
            S.divider(),
            S.documentTypeListItem('web3Form').title('Web3Forms'),
            S.documentTypeListItem('mailerliteForm').title('MailerLite Forms'),
            S.divider(),
            // Site Configuration Group
            S.listItem()
              .title('Site Configuration')
              .child(
                S.list()
                  .title('Site Configuration')
                  .items([
                    S.listItem()
                      .title('Site Layout')
                      .id('layout')
                      .child(S.document().schemaType('layout').documentId('layout')),
                    S.listItem()
                      .title('Site Footer')
                      .id('footer')
                      .child(S.document().schemaType('footer').documentId('footer')),
                    S.divider(),
                    S.documentTypeListItem('pillar'),
                    S.documentTypeListItem('navigation'),
                    S.listItem()
                      .title('Default Site Metadata')
                      .id('siteMetadata')
                      .child(S.document().schemaType('siteMetadata').documentId('siteMetadata')),
                  ]),
              ),
          ]),
    }),
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "Create new" menu
    templates: (prev) => prev.filter((template) => !['home', 'artistsPage', 'galleryPage', 'siteMetadata', 'newsletters', 'newsletterThankYou', 'layout', 'footer'].includes(template.id)),
  },

  document: {
    // For singleton types, filter out actions that are not appropriate
    actions: (prev, {schemaType}) => {
      if (['home', 'artistsPage', 'galleryPage', 'siteMetadata', 'newsletters', 'newsletterThankYou', 'layout', 'footer'].includes(schemaType)) {
        return prev.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
      }
      return prev
    },
  },
})

