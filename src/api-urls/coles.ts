export const locationSuggestionsURL = (limit: number, searchTerm: string) =>
  `https://www.coles.com.au/api/bff/locations/search/suggestions?limit=${limit}&searchTerm=${searchTerm}`
export const storeLocationsURL = (
  longitude: number,
  latitude: number,
  distance: number,
  numberOfLocations: number,
) =>
  `https://www.coles.com.au/api/bff/locations/search?longitude=${longitude}&latitude=${latitude}&distance=${distance}&numberOfLocations=${numberOfLocations}`
// TODO: add a variable in .env for the url since this is updated
export const productSearchURL = (searchTerm: string) =>
  `https://www.coles.com.au/_next/data/20230529.02_v3.38.0/en/search.json?q=${searchTerm}`
export const productImageURL = (imageURI: string) =>
  `https://productimages.coles.com.au/productimages/${imageURI}`
