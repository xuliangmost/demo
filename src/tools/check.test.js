import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  PhoneCall
} from './check';

describe('tools/check', () => {
  test('checkPhone should validate only string phone numbers', () => {
    expect(checkPhone('13800138000')).toBe(true);
    expect(checkPhone('12345678901')).toBe(false);
    expect(checkPhone(13800138000)).toBe(false);
  });

  test('checkEmail should reject non-string input', () => {
    expect(checkEmail('user@example.com')).toBe(true);
    expect(checkEmail('invalid@email')).toBe(false);
    expect(checkEmail(undefined)).toBe(false);
  });

  test('isEmpty and trimStr should handle non-string safely', () => {
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(trimStr('  abc  ')).toBe('abc');
    expect(trimStr(123)).toBe('123');
    expect(trimStr(null)).toBe('');
  });

  test('cardValidate should reject non-string input', () => {
    expect(cardValidate('11010519491231002X')).toBe(true);
    expect(cardValidate('123')).toBe(false);
    expect(cardValidate(11010519491231002)).toBe(false);
  });

  test('PhoneCall should open tel link for valid phone text', () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);

    PhoneCall(' 13800138000 ');
    expect(openSpy).toHaveBeenCalledWith('tel:13800138000', '_self');

    openSpy.mockClear();
    PhoneCall(13800138000);
    expect(openSpy).not.toHaveBeenCalled();

    openSpy.mockRestore();
  });
});
