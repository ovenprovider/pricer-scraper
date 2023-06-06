export type ColesLocationSuggestionsRequestQueries = {
  limit: number
  searchTerm: number
}

export type ColesLocationSuggestionsResponse = {
  localities: Localities[]
}

type Localities = {
  latitude: number
  longitude: number
  postcode: string
  suburb: string
  state: string
}
