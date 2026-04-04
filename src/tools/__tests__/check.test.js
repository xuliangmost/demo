import {isEmpty, trimStr, PhoneCall} from '../check'

describe('check tools', () => {
  test('isEmpty should handle nullish string and array values', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty('value')).toBe(false)
    expect(isEmpty([1])).toBe(false)
  })

  test('trimStr should be null-safe', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr('  a  ')).toBe('a')
    expect(trimStr(100)).toBe('100')
  })

  test('PhoneCall should not throw outside browser runtime', () => {
    const warnMock = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const oldWindow = global.window;

    // Simulate non-browser context.
    delete global.window;
    expect(() => PhoneCall('123456')).not.toThrow();
    expect(warnMock).toHaveBeenCalled();

    if (oldWindow) {
      global.window = oldWindow;
    }
    warnMock.mockRestore();
  })
})
