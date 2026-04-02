import {isEmpty, trimStr, PhoneCall} from './check'

describe('tools/check', () => {
  test('trimStr should handle nullish and non-string values', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr('  abc  ')).toBe('abc')
    expect(trimStr(123)).toBe('123')
  })

  test('isEmpty should not throw on non-string values', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty(0)).toBe(false)
  })

  test('PhoneCall should fail gracefully when react-native bridge missing', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})

    expect(() => PhoneCall('13800138000')).not.toThrow()
    expect(warnSpy).toHaveBeenCalledWith('react-native bridge is unavailable')

    warnSpy.mockRestore()
  })
})
