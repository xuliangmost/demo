import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  getNowFormatDate
} from './check'

describe('tools/check', () => {
  test('trimStr should be resilient for non-string values', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(trimStr('  abc  ')).toBe('abc');
  });

  test('checkPhone/checkEmail should handle invalid input safely', () => {
    expect(checkPhone(null)).toBe(false);
    expect(checkPhone(' 13800138000 ')).toBe(true);
    expect(checkEmail(undefined)).toBe(false);
    expect(checkEmail(' user@example.com ')).toBe(true);
  });

  test('isEmpty should support null/undefined/string/array', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty(0)).toBe(false);
  });

  test('cardValidate and getNowFormatDate output should be stable', () => {
    expect(cardValidate(null)).toBe(false);
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate(' 11010519491231002x ')).toBe(true);
    expect(cardValidate('not-card')).toBe(false);

    expect(getNowFormatDate()).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });
});
