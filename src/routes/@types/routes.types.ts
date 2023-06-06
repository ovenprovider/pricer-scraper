import { Request as ExpressFetchRequest } from 'express'

export type Request<T = { [key: string]: undefined | string }> =
  ExpressFetchRequest<{}, {}, {}, T, {}>
