import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate
} from './check';

describe('tools/check', () => {
  test('trimStr handles nullish and non-string values', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr('  demo  ')).toBe('demo');
    expect(trimStr(123)).toBe('123');
  });

  test('isEmpty only treats nullish and blank string as empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('value')).toBe(false);
    expect(isEmpty(0)).toBe(false);
  });

  test('checkPhone trims and validates China mainland mobile number', () => {
    expect(checkPhone(' 13800138000 ')).toBe(true);
    expect(checkPhone('12800138000')).toBe(false);
    expect(checkPhone('1380013800')).toBe(false);
  });

  test('checkEmail and cardValidate validate expected format', () => {
    expect(checkEmail('  test.user_1@example.com  ')).toBe(true);
    expect(checkEmail('invalid-email')).toBe(false);
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('123')).toBe(false);
  });
});
