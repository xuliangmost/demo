import {
  checkPhone,
  isEmpty,
  trimStr,
  PhoneCall
} from '../check';

describe('tools/check', () => {
  test('checkPhone should handle non-string safely', () => {
    expect(checkPhone(13800138000)).toBe(true);
    expect(checkPhone(null)).toBe(false);
  });

  test('isEmpty should not throw for non-string values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  test('trimStr should support non-string input', () => {
    expect(trimStr('  a b  ')).toBe('a b');
    expect(trimStr(123)).toBe('123');
    expect(trimStr(null)).toBe('null');
  });

  test('PhoneCall should return safely on invalid input', () => {
    expect(() => PhoneCall(13800138000)).not.toThrow();
  });
});
