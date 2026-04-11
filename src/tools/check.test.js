import {checkPhone, isEmpty, trimStr, PhoneCall} from './check'

describe('tools/check', () => {
  test('trimStr supports null and non-string values', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr(123)).toBe('123')
    expect(trimStr('  abc  ')).toBe('abc')
  })

  test('isEmpty handles string/nullish safely', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty('x')).toBe(false)
    expect(isEmpty(0)).toBe(false)
  })

  test('checkPhone trims spaces before validation', () => {
    expect(checkPhone(' 13812345678 ')).toBe(true)
    expect(checkPhone('12345')).toBe(false)
  })

  test('PhoneCall does not throw in non-browser runtime', () => {
    expect(() => PhoneCall('13812345678')).not.toThrow()
  })

  test('PhoneCall logs when phone is empty', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    PhoneCall(' ')
    expect(logSpy).toHaveBeenCalledWith('the phone number is required')
    logSpy.mockRestore()
  })
})
