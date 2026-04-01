import {isEmpty, trimStr, checkPhone} from './check';

describe('tools/check', () => {
  test('isEmpty handles non-string values safely', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  test('trimStr returns empty string for non-string input', () => {
    expect(trimStr(123)).toBe('');
    expect(trimStr('  abc  ')).toBe('abc');
  });

  test('checkPhone validates mobile numbers', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('123')).toBe(false);
  });
});
