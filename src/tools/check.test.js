import {
  isEmpty,
  trimStr,
  checkPhone,
  checkEmail,
  cardValidate
} from './check';

describe('tools/check', () => {
  it('isEmpty should handle nullable and string values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(0)).toBe(false);
  });

  it('trimStr should safely handle non-string values', () => {
    expect(trimStr('  hello  ')).toBe('hello');
    expect(trimStr(123)).toBe('123');
    expect(trimStr(null)).toBe('');
  });

  it('validators should keep original behavior', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('123')).toBe(false);
    expect(checkEmail('foo@example.com')).toBe(true);
    expect(checkEmail('not-an-email')).toBe(false);
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('abc')).toBe(false);
  });
});
