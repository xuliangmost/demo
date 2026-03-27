jest.mock('react-native', () => ({
  Linking: {
    canOpenURL: jest.fn(() => Promise.resolve(true)),
    openURL: jest.fn(() => Promise.resolve()),
  },
  Platform: {
    OS: 'ios',
  },
}), {virtual: true});

import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
} from './check';

describe('tools/check', () => {
  test('trimStr should safely handle non-string values', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr(123)).toBe('123');
    expect(trimStr('  abc  ')).toBe('abc');
  });

  test('isEmpty should not throw for non-string values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  test('validators should reject invalid input types', () => {
    expect(checkPhone(13812345678)).toBe(false);
    expect(checkEmail({ email: 'a@b.com' })).toBe(false);
    expect(cardValidate(123456)).toBe(false);
  });
});
