import {
  trimStr,
  isEmpty,
  getNowFormatDate
} from './check';

describe('tools/check', () => {
  test('trimStr should handle non-string values safely', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(trimStr('  ok  ')).toBe('ok');
  });

  test('isEmpty should work with null/undefined/whitespace', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty(0)).toBe(false);
  });

  test('getNowFormatDate should return fixed datetime format', () => {
    const value = getNowFormatDate();
    expect(value).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });
});
