import { ENV } from '../utils/environment'

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

type RequestParams = {
  path: string
  method: Method
  payload?: unknown
}

export class ApiClient {
  private static client: ApiClient
  private token: string | undefined

  private constructor() {
    this.debug('Initializing API client')
    this.token = 'not'
  }

  static getInstance(): ApiClient {
    if (!this.client) {
      this.client = new ApiClient()
    }
    return this.client
  }

  async request<T>(params: RequestParams): Promise<T> {
    const prefix = `[ApiClient:request]`
    this.debug(
      `${prefix} Requesting ${params.method} ${params.path}, payload:`,
      params.payload
    )

    const url = new URL(params.path, ENV.API_URL)
    const start = new Date().getTime()
    const response = await fetch(url, {
      method: params.method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Exclude token from headers if not set
        ...(this.token ? { 'X-Auth': this.token } : {}), // TODO: Test
      },
      // signal: controller.signal,
      body: params.payload ? JSON.stringify(params.payload) : undefined,
    })
    const end = new Date().getTime()
    this.debug(`${prefix} Request took ${end - start}ms`)
    this.debug(`${prefix} Response status: ${response.status}`)

    if (response.ok) {
      // Return ok response object
      const data = await response.json().catch(() => undefined)
      this.debug(`${prefix} Response data:`, data)
      return data as T
    } else {
      // Determine error type and return error object
      const error = await response.text()
      this.debug(`${prefix} Response error:`, error)
      throw new Error(error)
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
