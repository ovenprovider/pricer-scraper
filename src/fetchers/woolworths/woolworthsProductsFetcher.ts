// Libraries
import { woolworthsProductSearchURL, woolworthsWebsiteURL } from 'api-urls'
import userAgent from 'user-agents'

// Utils
import { fetchCookies, fetchJson } from 'utils'

export const getWoolworthsCookies = async (): Promise<string> => {
  const extraHeaders = {
    Host: 'www.woolworths.com.au',
    'User-Agent': new userAgent().toString(),
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    Origin: 'https://www.woolworths.com.au',
    Connection: 'keep-alive'
  }

  const response = await fetchCookies({
    URL: woolworthsWebsiteURL,
    method: 'GET',
    extraHeaders
  })

  return response.join(' ')
}

export const getWoolworthsProducts = async (searchTerm: string) => {
  const cookies = await getWoolworthsCookies()

  const body = JSON.stringify({
    EnableGp: false,
    Filters: [],
    IsHideUnavailableProducts: false,
    IsSpecial: false,
    Location: `/shop/search/products?searchTerm=${searchTerm}`,
    PageNumber: 1,
    PageSize: 24,
    SearchTerm: searchTerm,
    SortType: 'TraderRelevance'
  })

  const extraHeaders = {
    Host: 'www.woolworths.com.au',
    'User-Agent': new userAgent().toString(),
    Accept: 'application/json',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/json',
    'Content-Length': body.length.toString(),
    Origin: 'https://www.woolworths.com.au',
    Connection: 'keep-alive',
    Referer: `https://www.woolworths.com.au/shop/search/products?searchTerm=${searchTerm}`,
    Cookie: cookies,
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    TE: 'trailers'
  }

  const products = await fetchJson({
    URL: woolworthsProductSearchURL,
    method: 'POST',
    extraHeaders,
    body
  })
  return products
}
