import {isEmpty, trimStr} from './check'

describe('tools/check', () => {
  test('trimStr should return empty string for nullish values', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
  })

  test('isEmpty should not throw for non-string values', () => {
    expect(() => isEmpty(0)).not.toThrow()
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty('   ')).toBe(true)
  })
})
