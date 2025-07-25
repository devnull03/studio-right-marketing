import { at, createIfNotExists, defineMigration, replace, patch } from 'sanity/migrate'

/**
 * Simple function to remove diacritics and normalize text
 * Replaces the need for lodash deburr
 */
function normalize(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

/**
 * Generate a consistent ID for location documents based on the city name
 * This ensures we don't create duplicate location documents for the same city
 */
function getLocationId(cityName: string) {
  return `location-${normalize(cityName)}`
}

export default defineMigration({
  title: 'Convert cities from strings to location document references in services',
  documentTypes: ['service'],
  filter: 'defined(cities) && count(cities[_type != "reference"]) > 0',
  migrate: {
    document(service) {
      const currentCities = service.cities
      
      // migrate any city string to a location document reference
      if (Array.isArray(currentCities) && currentCities.length > 0) {
        return currentCities
          // skip cities that have already been converted to references
          .filter((city) => typeof city === 'string' || (typeof city === 'object' && !city._ref))
          .flatMap((city, index) => {
            // Handle both string cities and object cities that aren't references yet
            const cityName = typeof city === 'string' ? city : city.name || city.title
            
            if (!cityName) {
              // Skip invalid entries
              return []
            }
            
            const locationId = getLocationId(cityName)
            const cityKey = typeof city === 'object' && city._key ? city._key : undefined

            return [
              // Create location document if it doesn't exist
              createIfNotExists({
                _id: locationId,
                _type: 'location',
                name: cityName,
                slug: {
                  _type: 'slug',
                  current: normalize(cityName)
                }
              }),
              // Update the service document to replace this specific city with a reference
              patch(
                service._id,
                at(['cities', index], 
                  replace({ _type: 'reference', _ref: locationId }, cityKey)
                )
              )
            ]
          })
      }
    },
  },
})
