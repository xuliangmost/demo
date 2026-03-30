import {
  isEmpty,
  trimStr
} from './check';

describe('tools/check', () => {
  test('trimStr should trim left and right whitespace', () => {
    expect(trimStr('  hello world  ')).toBe('hello world');
  });

  test('isEmpty should return true for null/undefined/blank string', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
  });

  test('isEmpty should not throw for non-string values', () => {
    expect(() => isEmpty(0)).not.toThrow();
    expect(() => isEmpty(false)).not.toThrow();
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
