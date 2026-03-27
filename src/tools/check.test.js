import {
  checkPhone,
  checkEmail,
  isEmpty,
  trimStr
} from './check'

describe('tools/check', () => {
  test('checkPhone should support common mainland mobile prefixes', () => {
    expect(checkPhone('13812345678')).toBe(true)
    expect(checkPhone('19912345678')).toBe(true)
    expect(checkPhone('12812345678')).toBe(false)
  })

  test('checkEmail should guard non-string input', () => {
    expect(checkEmail('test@example.com')).toBe(true)
    expect(checkEmail('bad-email')).toBe(false)
    expect(checkEmail(null)).toBe(false)
  })

  test('isEmpty should not throw on non-string values', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty({})).toBe(false)
  })

  test('trimStr should safely trim nullable values', () => {
    expect(trimStr('  hello  ')).toBe('hello')
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
  })
})
