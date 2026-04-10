import {isEmpty, trimStr, PhoneCall} from './check'

describe('check tools', () => {
  test('trimStr handles null and undefined safely', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr('  abc  ')).toBe('abc')
  })

  test('isEmpty only trims strings', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty('x')).toBe(false)
    expect(isEmpty(0)).toBe(false)
  })

  test('PhoneCall returns tel url in web env', () => {
    const oldWindow = global.window
    global.window = {location: {href: ''}}
    const result = PhoneCall('13800000000')
    expect(result).toBe('tel:13800000000')
    expect(global.window.location.href).toBe('tel:13800000000')
    global.window = oldWindow
  })
})
