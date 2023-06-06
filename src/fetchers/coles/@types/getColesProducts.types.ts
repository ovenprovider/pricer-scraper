export type ColesProductSearchResponse = {
  pageProps: PageProps
  __N_SSP: boolean
}

type PageProps = {
  assetsUrl: string
  isMobile: boolean
  searchResults: SearchResults
}

type SearchResults = {
  didYouMean: string
  noOfResults: number
  start: number
  pageSize: number
  keyword: string
  resultType: number
  filters: Filter[]
  banners: Banner[]
  pageRestrictions: PageRestrictions
  results: Result[]
  catalogGroupView: CatalogGroupView[]
  excludedCatalogGroupView: ExcludedCatalogGroupView
  searchSessionId: string
  sortByValue: string
  isRestricted: boolean
  enableIndexAndFollow: boolean
  aemContentFragment: {}
}

type Filter = {
  name: string
  value: FilterValue[]
}

type FilterValue = {
  id: string
  displayText: string
  count: number
}

type Banner = {
  addId: string
  adSource: string
  campaignName: string
  expiry: string
  headingText: string
  bannerText: string
  bannerTextColor: string
  ctaFlag: boolean
  ctaText: string
  ctaTextAccessibility: string
  ctaLink: string
  backgroundImage: string
  backgroundImagePosition: string
  heroImage: string
  heroImageAltText: string
  productIds: string[]
  additionalFields: AdditionalField[]
}

type AdditionalField = {
  id: string
  value: string
}

type PageRestrictions = {
  tobaccoProducts: boolean
}

type Result = {
  _type: string
  adId: string
  adSource: string
  featured: boolean
  name: string
  brand: string
  description: string
  size: string
  availability: boolean
  availabilityType: string
  imageUris: ImageUri[]
  locations: Location[]
  restrictions: Restriction
  merchandiseHeir: MerchandiseHeir
  onlineHeirs: OnlineHeirs[]
}

type ImageUri = {
  altText: string
  type: string
  uri: string
}

type Location = {
  aisleSide: string
  description: string
  facing: string
  aisle: string
  order: number
  shelf: string
}

type Restriction = {
  retailLimit: number
  promotionalLimit: number
  liquorAgeRestrictionFlag: boolean
  tobaccoAgeRestrictionFlag: boolean
  delivery: string[]
}

type MerchandiseHeir = {
  tradeProfitCenter: string
  categoryGroup: string
  category: string
  subCategory: string
  className: string
}
type OnlineHeirs = {
  aisle: string
  category: string
  subCategory: string
}

type Pricing = {
  now: number
  was: number
  unit: Unit
  comparable: string
  promotionType: string
  onlineSpecial: boolean
}

type Unit = {
  quantity: number
  ofMeasureQuantity: number
  ofMeasureUnits: string
  price: number
  ofMeasureType: string
  isWeighted: boolean
}

type CatalogGroupView = {
  level: number
  name: string
  seoToken: string
  id: string
  productCount: number
  catalogGroupView: string
}

type ExcludedCatalogGroupView = {
  productCount: number
}
