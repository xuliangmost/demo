import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  PhoneCall
} from './check';

describe('tools/check', () => {
  test('checkPhone should validate mainland mobile numbers', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('12345678901')).toBe(false);
  });

  test('checkEmail should validate normal email format', () => {
    expect(checkEmail('user.name@test.com')).toBe(true);
    expect(checkEmail('invalid-email')).toBe(false);
  });

  test('cardValidate should validate id card format', () => {
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('123')).toBe(false);
  });

  test('isEmpty should safely handle non-string values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  test('trimStr should tolerate nullish and coerce values', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(trimStr('  hello  ')).toBe('hello');
  });

  test('PhoneCall should not throw in non-react-native environment', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    expect(() => PhoneCall('13800138000')).not.toThrow();
    warnSpy.mockRestore();
    logSpy.mockRestore();
  });
});
