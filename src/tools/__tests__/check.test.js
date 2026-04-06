import {
  checkPhone,
  checkEmail,
  isEmpty,
  trimStr,
  cardValidate,
} from '../check';

describe('tools/check', () => {
  test('checkPhone handles invalid types safely', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('abc')).toBe(false);
    expect(checkPhone(undefined)).toBe(false);
    expect(checkPhone(null)).toBe(false);
  });

  test('checkEmail handles non-string values', () => {
    expect(checkEmail('test@example.com')).toBe(true);
    expect(checkEmail('bad-email')).toBe(false);
    expect(checkEmail(undefined)).toBe(false);
  });

  test('trimStr and isEmpty no longer throw on non-string', () => {
    expect(trimStr('  hi  ')).toBe('hi');
    expect(trimStr(undefined)).toBe('');
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('value')).toBe(false);
    expect(isEmpty(0)).toBe(false);
  });

  test('cardValidate rejects non-string values', () => {
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('123')).toBe(false);
    expect(cardValidate(undefined)).toBe(false);
  });
});
