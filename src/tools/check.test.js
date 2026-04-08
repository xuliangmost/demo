import {
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate
} from './check'

describe('tools/check', () => {
  test('trimStr should handle nullish and non-string values', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr(123)).toBe('123')
    expect(trimStr('  hi  ')).toBe('hi')
  })

  test('isEmpty should only treat nullish and blank string as empty', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty('x')).toBe(false)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(false)
  })

  test('checkPhone should support numeric input without throwing', () => {
    expect(checkPhone(13800138000)).toBe(true)
    expect(checkPhone('13800138000')).toBe(true)
    expect(checkPhone(null)).toBe(false)
  })

  test('cardValidate should return false for nullish values', () => {
    expect(cardValidate(null)).toBe(false)
    expect(cardValidate(undefined)).toBe(false)
  })
})
