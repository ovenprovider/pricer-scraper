// Libraries
import { locationSuggestionsURL, storeLocationsURL } from 'api-urls'

// Utils
import { fetchJson } from 'utils'

// Types
import { ColesStoreLocationsResponse, ColesLocationSuggestionsResponse } from './@types'

export const getColesLocationsSuggestions = async (searchTerm: string) => {
  const locationSuggestions: ColesLocationSuggestionsResponse = await fetchJson({
    URL: locationSuggestionsURL(3, searchTerm),
    method: 'GET'
  })
  return locationSuggestions
}

export const getColesStoreLocations = async (
  longitude: number,
  latitude: number,
  distance?: number,
  numberOfLocations?: number
) => {
  const storeLocations: ColesStoreLocationsResponse = await fetchJson({
    URL: storeLocationsURL(longitude, latitude, distance ?? 5000, numberOfLocations ?? 5),
    method: 'GET'
  })
  return storeLocations
}
