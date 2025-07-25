import { at, defineMigration, set, patch } from 'sanity/migrate'

/**
 * Simple function to remove diacritics and normalize text
 * Used for generating consistent keys
 */
function normalize(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export default defineMigration({
  title: 'Add all location references to all service documents',
  documentTypes: ['service'],
  filter: '*', // Apply to all service documents
  migrate: {
    async document(service, context) {
      // Fetch all location documents
      const locationQuery = '*[_type == "location"]{ _id, name }'
      const locations = await context.client.fetch(locationQuery)
      
      if (locations.length === 0) {
        // No locations to add
        return []
      }

      // Create array of location references
      const locationReferences = locations.map((location: { _id: string, name: string }) => ({
        _type: 'reference',
        _ref: location._id,
        _key: `location-${normalize(location.name)}-key`
      }))

      // Set the cities field to all location references
      return [
        patch(
          service._id,
          at(['cities'], set(locationReferences))
        )
      ]
    },
  },
})

