import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate
} from './check';

describe('tools/check', () => {
  test('checkPhone should validate mainland phone numbers', () => {
    expect(checkPhone('13812345678')).toBe(true);
    expect(checkPhone('12812345678')).toBe(false);
  });

  test('checkEmail should validate basic email formats', () => {
    expect(checkEmail('dev@example.com')).toBe(true);
    expect(checkEmail('dev@')).toBe(false);
  });

  test('isEmpty should only treat null/undefined/blank string as empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty([])).toBe(false);
  });

  test('trimStr should safely handle nullish values', () => {
    expect(trimStr('  hello  ')).toBe('hello');
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
  });

  test('cardValidate should not throw on non-string input', () => {
    expect(cardValidate('123456789012345')).toBe(true);
    expect(cardValidate(null)).toBe(false);
  });
});
