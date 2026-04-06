import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
} from './check';

describe('tools/check', () => {
  test('checkPhone validates mainland phone numbers', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('23800138000')).toBe(false);
  });

  test('checkEmail validates common email format', () => {
    expect(checkEmail('foo.bar@test.com')).toBe(true);
    expect(checkEmail('invalid-email')).toBe(false);
  });

  test('trimStr handles nullish and non-string input safely', () => {
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(null)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(trimStr('  hello  ')).toBe('hello');
  });

  test('isEmpty handles multiple input types safely', () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('value')).toBe(false);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty(0)).toBe(false);
  });

  test('cardValidate accepts valid id card patterns', () => {
    expect(cardValidate('123456789012345')).toBe(true);
    expect(cardValidate('12345678901234567X')).toBe(true);
    expect(cardValidate('123')).toBe(false);
  });
});
