import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  PhoneCall
} from './check';

describe('tools/check', () => {
  test('checkPhone validates mainland mobile numbers', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('12345678901')).toBe(false);
  });

  test('checkEmail validates email format', () => {
    expect(checkEmail('demo.user@example.com')).toBe(true);
    expect(checkEmail('invalid-email')).toBe(false);
  });

  test('isEmpty handles non-string values safely', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  test('trimStr returns empty string for non-string input', () => {
    expect(trimStr('  hello  ')).toBe('hello');
    expect(trimStr(123)).toBe('');
  });

  test('cardValidate validates identity card formats', () => {
    expect(cardValidate('123456789012345')).toBe(true);
    expect(cardValidate('123456789012345678')).toBe(true);
    expect(cardValidate('12345678901234567X')).toBe(true);
    expect(cardValidate('abc')).toBe(false);
  });

  test('PhoneCall exits safely for invalid input', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    PhoneCall(13800138000);

    expect(logSpy).toHaveBeenCalledWith('the phone number must be provided as a String value');
    logSpy.mockRestore();
  });
});
