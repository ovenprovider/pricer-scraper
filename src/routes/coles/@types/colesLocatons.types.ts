export type ColesLocationSuggestionsRequestQueries = {
  searchTerm: string
  limit?: number
}

export type ColesStoreLocationsRequestQueries = {
  longitude: number
  latitude: number
  distance?: number
  numberOfLocations?: number
}
