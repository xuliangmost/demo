import {getInitialSelectValue} from './select_'

describe('getInitialSelectValue', () => {
  it('returns empty string when options is missing', () => {
    expect(getInitialSelectValue()).toBe('');
    expect(getInitialSelectValue(null)).toBe('');
    expect(getInitialSelectValue([])).toBe('');
  });

  it('returns first option value when options exists', () => {
    expect(getInitialSelectValue([{value: 'value1'}, {value: 'value2'}])).toBe('value1');
  });
});
