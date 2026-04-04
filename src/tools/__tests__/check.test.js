import {isEmpty, trimStr, PhoneCall} from '../check';

describe('tools/check', () => {
  it('isEmpty should only treat null/undefined/blank string as empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(0)).toBe(false);
  });

  it('trimStr should safely handle non-string values', () => {
    expect(trimStr(0)).toBe('0');
    expect(trimStr('  hello  ')).toBe('hello');
  });

  it('PhoneCall should not throw without window', () => {
    const originalWindow = global.window;
    try {
      // Simulate non-browser runtime (e.g. node test env).
      global.window = undefined;
      expect(() => PhoneCall('13800138000')).not.toThrow();
    } finally {
      global.window = originalWindow;
    }
  });
});
