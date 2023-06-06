export const locationSuggestionsURL = (limit: number, searchTerm: string) =>
  `https://www.coles.com.au/api/bff/locations/search/suggestions?limit=${limit}&searchTerm=${searchTerm}`
export const storeLocationsURL = (
  longitude: number,
  latitude: number,
  distance: number,
  numberOfLocations: number,
) =>
  `https://www.coles.com.au/api/bff/locations/search?longitude=${longitude}&latitude=${latitude}&distance=${distance}&numberOfLocations=${numberOfLocations}`
export const productSearchURL = (searchTerm: string) =>
  `https://www.coles.com.au/_next/data/20230316.01_v3.29.0/en/search.json?q=${searchTerm}`
export const productImageURL = (imageURI: string) =>
  `https://productimages.coles.com.au/productimages/${imageURI}`
