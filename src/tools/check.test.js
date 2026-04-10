import {
  checkPhone,
  checkEmail,
  isEmpty,
  trimStr,
  cardValidate,
} from './check';

describe('tools/check', () => {
  test('checkPhone supports string and number inputs safely', () => {
    expect(checkPhone('13812345678')).toBe(true);
    expect(checkPhone(13812345678)).toBe(true);
    expect(checkPhone('123456')).toBe(false);
  });

  test('checkEmail validates common email values', () => {
    expect(checkEmail('user.name@example.com')).toBe(true);
    expect(checkEmail('invalid-email')).toBe(false);
  });

  test('trimStr and isEmpty handle nullable and non-string values', () => {
    expect(trimStr('  abc  ')).toBe('abc');
    expect(trimStr(null)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(0)).toBe(false);
  });

  test('cardValidate handles valid and invalid card numbers', () => {
    expect(cardValidate('123456789012345')).toBe(true);
    expect(cardValidate('123456789012345678')).toBe(true);
    expect(cardValidate('12345678901234567X')).toBe(true);
    expect(cardValidate('abcdefg')).toBe(false);
  });
});
