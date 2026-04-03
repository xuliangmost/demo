import {isEmpty, trimStr, checkPhone, checkEmail, cardValidate} from './check'

describe('tools/check', () => {
  it('isEmpty handles null/undefined/string and non-string safely', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  it('trimStr removes leading and trailing spaces', () => {
    expect(trimStr('  abc  ')).toBe('abc');
  });

  it('checkPhone/checkEmail/cardValidate keep expected behavior', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('123456')).toBe(false);

    expect(checkEmail('name@example.com')).toBe(true);
    expect(checkEmail('bad-email')).toBe(false);

    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('123')).toBe(false);
  });
});
