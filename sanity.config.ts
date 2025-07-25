import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { snsSchemaTypes } from './schemaTypes/splash-n-shine'

export default defineConfig([
  {
    name: 'default',
    title: 'Splash n Shine',
    basePath: '/splash-n-shine',

    projectId: 'ws2fgpe5',
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
      types: snsSchemaTypes,
    },
  }
])
