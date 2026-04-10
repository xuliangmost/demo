import {checkPhone, isEmpty, trimStr} from './check';

describe('tools/check', () => {
  describe('trimStr', () => {
    it('should trim spaces for string input', () => {
      expect(trimStr('  hello  ')).toBe('hello');
    });

    it('should return empty string for nullish values', () => {
      expect(trimStr(null)).toBe('');
      expect(trimStr(undefined)).toBe('');
    });

    it('should safely convert non-string values', () => {
      expect(trimStr(123)).toBe('123');
      expect(trimStr(true)).toBe('true');
    });
  });

  describe('isEmpty', () => {
    it('should treat nullish and blank strings as empty', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
      expect(isEmpty('   ')).toBe(true);
    });

    it('should not treat non-empty strings as empty', () => {
      expect(isEmpty('a')).toBe(false);
    });

    it('should not throw for non-string values', () => {
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(false)).toBe(false);
      expect(isEmpty({})).toBe(false);
    });
  });

  describe('checkPhone', () => {
    it('should validate mainland phone numbers after trim', () => {
      expect(checkPhone(' 13812345678 ')).toBe(true);
      expect(checkPhone('123')).toBe(false);
    });
  });
});
