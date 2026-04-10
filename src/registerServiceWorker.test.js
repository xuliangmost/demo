import {isServiceWorkerScriptResponse} from './registerServiceWorker'

describe('isServiceWorkerScriptResponse', () => {
  function createResponse(status, contentType) {
    return {
      status,
      headers: {
        get: () => contentType
      }
    }
  }

  it('returns true for javascript content type and non-404 status', () => {
    const response = createResponse(200, 'application/javascript')
    expect(isServiceWorkerScriptResponse(response)).toBe(true)
  })

  it('returns false when status is 404', () => {
    const response = createResponse(404, 'application/javascript')
    expect(isServiceWorkerScriptResponse(response)).toBe(false)
  })

  it('returns false when content type is missing', () => {
    const response = createResponse(200, null)
    expect(isServiceWorkerScriptResponse(response)).toBe(false)
  })

  it('returns false when content type is not javascript', () => {
    const response = createResponse(200, 'text/html')
    expect(isServiceWorkerScriptResponse(response)).toBe(false)
  })
})
