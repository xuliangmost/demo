import {
  checkPhone,
  checkEmail,
  isEmpty,
  trimStr,
  cardValidate
} from './check'

describe('src/tools/check', () => {
  it('checkPhone should validate mainland phone number', () => {
    expect(checkPhone('13800138000')).toBe(true)
    expect(checkPhone('12800138000')).toBe(false)
  })

  it('checkEmail should validate basic email format', () => {
    expect(checkEmail('foo.bar@test.com')).toBe(true)
    expect(checkEmail('invalid-email')).toBe(false)
  })

  it('trimStr should support non-string values safely', () => {
    expect(trimStr('  abc  ')).toBe('abc')
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr(123)).toBe('123')
  })

  it('isEmpty should not throw on non-string values', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty('a')).toBe(false)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty(0)).toBe(false)
    expect(() => isEmpty({})).not.toThrow()
  })

  it('cardValidate should validate id number formats', () => {
    expect(cardValidate('11010519491231002X')).toBe(true)
    expect(cardValidate('123')).toBe(false)
  })
})
