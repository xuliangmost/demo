import {isEmpty, trimStr} from './check'

describe('check tools', () => {
  test('isEmpty handles null/undefined/blank string', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
  })

  test('isEmpty keeps non-string values as non-empty', () => {
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(false)
    expect(isEmpty({})).toBe(false)
  })

  test('trimStr supports non-string input safely', () => {
    expect(trimStr('  abc  ')).toBe('abc')
    expect(trimStr(123)).toBe('123')
  })
})
