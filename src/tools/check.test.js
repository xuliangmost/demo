import {isEmpty, trimStr, checkEmail, checkPhone, cardValidate} from './check';

describe('tools/check', () => {
  test('isEmpty handles null undefined and blank strings', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
  });

  test('isEmpty does not throw for non-string values', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  test('trimStr handles non-string inputs safely', () => {
    expect(trimStr('  x  ')).toBe('x');
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(123)).toBe('123');
  });

  test('validators keep existing behavior', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('123456')).toBe(false);
    expect(checkEmail('a@b.com')).toBe(true);
    expect(checkEmail('not-an-email')).toBe(false);
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('abc')).toBe(false);
  });
});
