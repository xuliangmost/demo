import {
  checkPhone,
  checkEmail,
  isEmpty,
  trimStr,
  cardValidate,
  LaunchURL
} from './check'

describe('tools/check', () => {
  test('trimStr should handle null and non-string values', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr(123)).toBe('123')
    expect(trimStr('  a  ')).toBe('a')
  })

  test('isEmpty should be robust for non-string values', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty(0)).toBe(false)
  })

  test('checkPhone/checkEmail/cardValidate should reject non-string values', () => {
    expect(checkPhone(13800138000)).toBe(false)
    expect(checkEmail({})).toBe(false)
    expect(cardValidate(123)).toBe(false)
  })

  test('checkPhone/checkEmail/cardValidate should validate trimmed strings', () => {
    expect(checkPhone(' 13800138000 ')).toBe(true)
    expect(checkEmail(' test@example.com ')).toBe(true)
    expect(cardValidate(' 11010519491231002X ')).toBe(true)
  })

  test('LaunchURL should be safe when window.open is unavailable', () => {
    const originalOpen = window.open
    window.open = undefined
    expect(() => LaunchURL('tel:13800138000')).not.toThrow()
    window.open = originalOpen
  })
})
