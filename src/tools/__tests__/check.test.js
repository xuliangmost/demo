import {isEmpty, trimStr} from '../check';

describe('tools/check', () => {
  it('isEmpty handles nullish and blank strings', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
  });

  it('isEmpty does not crash for non-string values', () => {
    expect(() => isEmpty(0)).not.toThrow();
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty({})).toBe(false);
  });

  it('trimStr is safe for nullish values', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
    expect(trimStr('  hi  ')).toBe('hi');
  });
});
