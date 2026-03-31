import {isEmpty, trimStr} from './check'

describe('check helpers', () => {
  test('isEmpty should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('isEmpty should trim string before checking emptiness', () => {
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(' a ')).toBe(false);
  });

  test('isEmpty should not throw for non-string values', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  test('trimStr should support nullish and non-string values', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(trimStr('  ok  ')).toBe('ok');
  });
});
