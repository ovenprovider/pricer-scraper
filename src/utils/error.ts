type Error = {
  message: string
  fields?: string[]
}

export type ErrorResponse = {
  statusCode: number
  error: Error
}

export const errorResponse = (statusCode: number, message?: string): ErrorResponse => ({
  statusCode,
  error: {
    message: message ?? '3rd party error response'
  }
})
