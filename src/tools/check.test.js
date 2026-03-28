import {
  isEmpty,
  trimStr,
  checkEmail,
  checkPhone,
  cardValidate
} from './check';

describe('tools/check', () => {
  test('isEmpty handles null/undefined/strings safely', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('  a  ')).toBe(false);
  });

  test('isEmpty does not throw for non-string values', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  test('trimStr converts non-strings and trims whitespace', () => {
    expect(trimStr('  abc  ')).toBe('abc');
    expect(trimStr(123)).toBe('123');
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
  });

  test('regex validators still work', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('123')).toBe(false);
    expect(checkEmail('foo@example.com')).toBe(true);
    expect(checkEmail('foo@')).toBe(false);
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('invalid-id')).toBe(false);
  });
});
