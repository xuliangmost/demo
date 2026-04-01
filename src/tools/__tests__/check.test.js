import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  PhoneCall
} from '../check'

describe('tools/check', () => {
  test('trimStr can handle nullish and normal string', () => {
    expect(trimStr(undefined)).toBe('')
    expect(trimStr(null)).toBe('')
    expect(trimStr('  abc  ')).toBe('abc')
  })

  test('isEmpty handles blank and non-string values safely', () => {
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(0)).toBe(false)
  })

  test('common validators still work', () => {
    expect(checkPhone('13800138000')).toBe(true)
    expect(checkEmail('test@example.com')).toBe(true)
    expect(cardValidate('11010519491231002X')).toBe(true)
  })

  test('PhoneCall does not crash in non-browser environment', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
    const originalWindow = global.window
    global.window = undefined
    PhoneCall('13800138000')
    expect(warnSpy).toHaveBeenCalled()
    global.window = originalWindow
    warnSpy.mockRestore()
  })
})
