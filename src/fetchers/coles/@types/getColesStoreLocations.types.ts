export type ColesStoreLocationsResponse = {
  locations: Location[]
}

type Location = {
  locationId: string
  collectionDescription: string
  collectionType: string
  collectionInstructions: string
  locationName: string
  brandId: number
  brandName: string
  latitude: number
  longitude: number
  baggingOptions: string[]
  address: string
  suburb: string
  postcode: string
  state: string
  phone: string
  fulfilmentStore: FulfilmentStore
  distance: Distance
}

type FulfilmentStore = {
  storeId: string
  brandName: string
  brandId: number
  latitude: number
  longitude: number
  storeName: string
  address: string
  suburb: string
  postcode: string
  phone: string
}

type Distance = {
  measurement: number
  description: string
  uom: string
}
