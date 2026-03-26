import {isEmpty, trimStr} from '../check';

describe('tools/check', () => {
  test('trimStr handles null and undefined safely', () => {
    expect(trimStr(null)).toBe('');
    expect(trimStr(undefined)).toBe('');
  });

  test('trimStr coerces non-string values', () => {
    expect(trimStr(123)).toBe('123');
    expect(trimStr(true)).toBe('true');
  });

  test('isEmpty only treats null/undefined/blank string as empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty(' x ')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
