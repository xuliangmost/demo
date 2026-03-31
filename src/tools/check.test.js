import {isEmpty, trimStr, checkPhone, checkEmail, cardValidate} from './check'

describe('tools/check', () => {
  test('isEmpty handles nullish and blank strings', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
  });

  test('isEmpty supports non-string values safely', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  test('trimStr removes both-side spaces', () => {
    expect(trimStr('  hello world  ')).toBe('hello world');
  });

  test('validators keep expected behavior', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('123456')).toBe(false);
    expect(checkEmail('foo.bar@test.com')).toBe(true);
    expect(checkEmail('foo@bar')).toBe(false);
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('abc')).toBe(false);
  });
});
