import {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate
} from '../check';

describe('tools/check', () => {
  describe('isEmpty', () => {
    it('returns true for null and undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('returns true for blank strings after trim', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
    });

    it('returns false for non-string values without throwing', () => {
      expect(() => isEmpty(0)).not.toThrow();
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty({})).toBe(false);
    });
  });

  describe('trimStr', () => {
    it('trims string values', () => {
      expect(trimStr('  abc  ')).toBe('abc');
    });

    it('safely handles non-string input', () => {
      expect(trimStr(null)).toBe('');
      expect(trimStr(undefined)).toBe('');
      expect(trimStr(123)).toBe('123');
    });
  });

  describe('basic validators', () => {
    it('validates phone numbers', () => {
      expect(checkPhone('13800138000')).toBe(true);
      expect(checkPhone('12800138000')).toBe(false);
    });

    it('validates emails', () => {
      expect(checkEmail('abc@test.com')).toBe(true);
      expect(checkEmail('abc#test.com')).toBe(false);
    });

    it('validates id card format', () => {
      expect(cardValidate('11010519491231002X')).toBe(true);
      expect(cardValidate('123')).toBe(false);
    });
  });
});
