import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr
} from './check'

describe('tools/check', () => {
  test('checkPhone should validate mainland mobile numbers', () => {
    expect(checkPhone('13812345678')).toBe(true)
    expect(checkPhone('12812345678')).toBe(false)
    expect(checkPhone('1381234')).toBe(false)
  })

  test('checkEmail should validate common email format', () => {
    expect(checkEmail('demo.user@example.com')).toBe(true)
    expect(checkEmail('bad-email')).toBe(false)
  })

  test('isEmpty should support non-string values safely', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty({})).toBe(false)
  })

  test('trimStr should return empty string for nullish values', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr('  abc  ')).toBe('abc')
    expect(trimStr(123)).toBe('123')
  })
})
