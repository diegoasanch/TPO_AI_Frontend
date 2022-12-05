export const ENV = {
  API_URL: process.env.REACT_APP_API_URL || '',
  API_DEBUG_LOGGING: process.env.REACT_APP_API_DEBUG_LOGGING === 'true',
} as const

console.log({ ENV })
