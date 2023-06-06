// Libraries
import setCookie from 'set-cookie-parser'
import nodeFetch, { BodyInit, HeadersInit } from 'node-fetch'

// Utils
import { errorResponse } from 'utils'

type ALLOWED_HTTP_METHODS = 'GET' | 'POST'

type Fetch = {
  URL: string
  method: ALLOWED_HTTP_METHODS
  extraHeaders?: HeadersInit
  body?: BodyInit
}

type FetchJSON = Fetch & {
  transformer?: (...args: any[]) => [{ key: string }]
}

const defaultHeaders: HeadersInit = {
  'ocp-apim-subscription-key': process.env.COLES_API_SUBSCRIPTION_KEY ?? 'string'
}

const fetchIsUnccessful = (statusCode: number) => {
  return statusCode >= 500 && statusCode <= 599
}

const fetchIsSuccessful = (statusCode: number) => {
  return statusCode >= 200 && statusCode <= 299
}

const fetch = async ({ URL, method, extraHeaders, body }: Fetch) => {
  const response = await nodeFetch(URL, {
    method,
    headers: Object.assign(defaultHeaders, extraHeaders, { timeout: 10000 }),
    body
  })
  return response
}

export const fetchJson = async ({ URL, method, extraHeaders, body, transformer }: FetchJSON): Promise<any> => {
  const response = await fetch({ URL, method, extraHeaders, body })

  if (!fetchIsSuccessful(response.status)) return errorResponse(response.status)

  if (!response.headers.get('Content-Type')?.includes('application/json'))
    return errorResponse(400, 'Did not receive a json response from the third party API.')

  const data = await response.json()
  return transformer ? transformer(data) : data
}

export const fetchCookies = async ({ URL, method, extraHeaders }: Omit<Fetch, 'body'>) => {
  const response = await fetch({ URL, method, extraHeaders })
  if (fetchIsUnccessful(response.status)) return []

  const headerCookies = response.headers.get('set-cookie') ?? ''

  if (!headerCookies) return []

  const cookies = setCookie.splitCookiesString(headerCookies)
  const newCookies = cookies.map((value: string) => {
    const cookie = setCookie.parseString(value)
    return `${cookie.name}=${cookie.value};`
  })

  return newCookies
}
