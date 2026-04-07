import {isJavaScriptResponse} from './registerServiceWorker'

describe('registerServiceWorker helpers', () => {
  test('isJavaScriptResponse returns false when response is invalid', () => {
    expect(isJavaScriptResponse(null)).toBe(false)
    expect(isJavaScriptResponse({})).toBe(false)
    expect(isJavaScriptResponse({headers: {}})).toBe(false)
  })

  test('isJavaScriptResponse returns false when content-type is missing', () => {
    const response = {
      headers: {
        get: () => null
      }
    }
    expect(isJavaScriptResponse(response)).toBe(false)
  })

  test('isJavaScriptResponse returns true for javascript content-type', () => {
    const response = {
      headers: {
        get: () => 'application/javascript; charset=utf-8'
      }
    }
    expect(isJavaScriptResponse(response)).toBe(true)
  })
})
