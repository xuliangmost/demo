import {isEmpty, trimStr, checkPhone, checkEmail, cardValidate} from './check'

describe('tools/check', () => {
  test('isEmpty handles non-string values safely', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('isEmpty and trimStr handle whitespace text', () => {
    expect(trimStr('  hello  ')).toBe('hello');
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(' x ')).toBe(false);
  });

  test('validators still work for common inputs', () => {
    expect(checkPhone('13812345678')).toBe(true);
    expect(checkPhone('12812345678')).toBe(false);
    expect(checkEmail('user.demo@test.com')).toBe(true);
    expect(checkEmail('wrong-email')).toBe(false);
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('123')).toBe(false);
  });
});
