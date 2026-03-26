import {
  isEmpty,
  trimStr
} from './check'

describe('tools/check', () => {
  test('trimStr should handle nullish values safely', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
  })

  test('trimStr should trim non-string input by coercion', () => {
    expect(trimStr(123)).toBe('123')
    expect(trimStr('  abc  ')).toBe('abc')
  })

  test('isEmpty should work for nullish and string values', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty('abc')).toBe(false)
  })

  test('isEmpty should not treat non-empty non-string values as empty', () => {
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(false)
    expect(isEmpty({})).toBe(false)
  })
})
