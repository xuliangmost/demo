import {
  isEmpty,
  trimStr,
  PhoneCall
} from './check';

describe('tools/check', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('trimStr should safely handle nullish and non-string values', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(trimStr('  abc  ')).toBe('abc');
  });

  test('isEmpty should only treat nullish and blank string as empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(' a ')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  test('PhoneCall should return false for invalid input', () => {
    expect(PhoneCall(12345)).toBe(false);
  });

  test('PhoneCall should return true for valid input in browser-like context', () => {
    expect(PhoneCall('13800138000')).toBe(true);
  });
});
