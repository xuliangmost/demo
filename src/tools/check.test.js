import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  PhoneCall
} from './check';

describe('tools/check', () => {
  test('checkPhone validates CN mobile numbers', () => {
    expect(checkPhone('13812345678')).toBe(true);
    expect(checkPhone('12812345678')).toBe(false);
  });

  test('checkEmail validates simple email format', () => {
    expect(checkEmail('demo.user@example.com')).toBe(true);
    expect(checkEmail('bad-email')).toBe(false);
  });

  test('isEmpty and trimStr handle null/undefined safely', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr('  value  ')).toBe('value');

    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('ok')).toBe(false);
  });

  test('cardValidate validates 15/18-digit ids', () => {
    expect(cardValidate('123456789012345')).toBe(true);
    expect(cardValidate('123456789012345678')).toBe(true);
    expect(cardValidate('12345678901234567X')).toBe(true);
    expect(cardValidate('123')).toBe(false);
  });

  test('PhoneCall returns false without browser window', () => {
    expect(PhoneCall('13812345678')).toBe(false);
  });

  test('PhoneCall opens tel url in browser environment', () => {
    const originalWindow = global.window;
    global.window = {open: jest.fn()};

    const result = PhoneCall('13812345678', false);

    expect(result).toBe(true);
    expect(global.window.open).toHaveBeenCalledWith('tel:13812345678');
    global.window = originalWindow;
  });
});
