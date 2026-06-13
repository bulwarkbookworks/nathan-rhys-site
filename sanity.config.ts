import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
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
            // Regular document types
            ...S.documentTypeListItems().filter(
              (listItem) => !['home'].includes(listItem.getId() || ''),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "Create new" menu
    templates: (prev) => prev.filter((template) => !['home'].includes(template.id)),
  },

  document: {
    // For singleton types, filter out actions that are not appropriate
    actions: (prev, {schemaType}) => {
      if (schemaType === 'home') {
        return prev.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
      }
      return prev
    },
  },
})
