import {
  isEmpty,
  trimStr,
  checkPhone,
  checkEmail,
  cardValidate
} from './check';

describe('tools/check', () => {
  test('trimStr handles null and non-string values', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(trimStr('  abc  ')).toBe('abc');
  });

  test('isEmpty does not throw for non-string values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  test('validators work for common valid and invalid cases', () => {
    expect(checkPhone('13812345678')).toBe(true);
    expect(checkPhone('23812345678')).toBe(false);

    expect(checkEmail('demo@example.com')).toBe(true);
    expect(checkEmail('bad-email')).toBe(false);

    expect(cardValidate('123456789012345')).toBe(true);
    expect(cardValidate('123')).toBe(false);
  });
});
