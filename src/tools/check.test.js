import {isEmpty, trimStr} from './check';

describe('tools/check', () => {
  test('isEmpty handles nullish and blank values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
  });

  test('isEmpty handles non-string values without throwing', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  test('trimStr removes both sides whitespace', () => {
    expect(trimStr('  demo  ')).toBe('demo');
  });
});
