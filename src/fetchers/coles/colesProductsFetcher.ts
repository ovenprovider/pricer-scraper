import { productSearchURL } from 'api-urls'
import { ColesProductSearchResponse } from './@types'
import { fetchJson } from 'utils'

export const getColesProducts = async (searchTerm: string) => {
  const products: ColesProductSearchResponse = await fetchJson({
    URL: productSearchURL(searchTerm),
    method: 'GET'
  })
  return products
}
