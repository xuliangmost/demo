import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  PhoneCall
} from './check';

describe('tools/check', () => {
  test('checkPhone should handle non-string safely', () => {
    expect(checkPhone(13800138000)).toBe(false);
    expect(checkPhone(' 13800138000 ')).toBe(true);
  });

  test('checkEmail should trim input and reject invalid', () => {
    expect(checkEmail(' user@example.com ')).toBe(true);
    expect(checkEmail('not-an-email')).toBe(false);
    expect(checkEmail(null)).toBe(false);
  });

  test('isEmpty should support string array null undefined', () => {
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('trimStr should not throw on non-string', () => {
    expect(trimStr('  a  ')).toBe('a');
    expect(trimStr(123)).toBe('123');
    expect(trimStr(null)).toBe('');
  });

  test('cardValidate should support number and string values', () => {
    expect(cardValidate('123456789012345')).toBe(true);
    expect(cardValidate(123456789012345678)).toBe(true);
    expect(cardValidate('invalid-card')).toBe(false);
  });

  test('PhoneCall should return false in non-browser env', () => {
    const originalWindow = global.window;
    delete global.window;
    expect(PhoneCall('13800138000')).toBe(false);
    global.window = originalWindow;
  });
});
