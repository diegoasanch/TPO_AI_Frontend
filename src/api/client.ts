import { ENV } from '../utils/environment'

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
export enum ApiError {
  NetworkError = 'NetworkError',
  ServerError = 'ServerError',
  ClientError = 'ClientError',
}

export type ApiResult<T> =
  | {
      data: T
      isError: false
    }
  | {
      errorType: ApiError
      error: string
      isError: true
    }

export class ApiClient {
  private static client: ApiClient
  private token: string | undefined

  private constructor() {
    this.debug('Initializing API client')
  }

  static getInstance(): ApiClient {
    if (!this.client) {
      this.client = new ApiClient()
    }
    return this.client
  }

  async request<T>(params: {
    path: string
    method: Method
    variables?: unknown
  }): Promise<ApiResult<T>> {
    const prefix = `[ApiClient:request]`
    this.debug(
      `${prefix} Requesting ${params.method} ${params.path}, variables:`,
      params.variables
    )

    try {
      const url = new URL(params.path, ENV.API_URL)
      const start = new Date().getTime()
      const response = await fetch(url, {
        method: params.method,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          // Exclude token from headers if not set
          ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
        },
        body: params.variables ? JSON.stringify(params.variables) : undefined,
      })
      const end = new Date().getTime()
      this.debug(`${prefix} Request took ${end - start}ms`)
      this.debug(`${prefix} Response status: ${response.status}`)

      if (response.ok) {
        // Return ok response object
        const data = await response.json()
        this.debug(`${prefix} Response data:`, data)
        return { data: data as T, isError: false }
      } else {
        // Determine error type and return error object
        const error = await response.text()
        this.debug(`${prefix} Response error:`, error)
        const errorType =
          response.status >= 500 ? ApiError.ServerError : ApiError.ClientError
        return {
          errorType,
          error,
          isError: true,
        }
      }
    } catch (error: unknown) {
      this.debug(`${prefix} Network error:`, error)
      return {
        errorType: ApiError.NetworkError,
        error: (error as { message?: string }).message || 'Unknown error',
        isError: true,
      }
    }
  }

  setToken(token: string) {
    this.token = token
  }

  removeToken() {
    this.token = undefined
  }

  private debug(action: string, ...args: unknown[]) {
    if (ENV.API_DEBUG_LOGGING) {
      console.log(`[API] ${action}`, ...args)
    }
  }
}
