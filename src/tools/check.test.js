import {isEmpty} from './check'

describe('check.isEmpty', () => {
  it('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('returns true for blank strings', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('   ')).toBe(true);
  });

  it('returns false for non-string values and non-empty strings', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({})).toBe(false);
    expect(isEmpty('ok')).toBe(false);
  });
});
