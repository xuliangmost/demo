import {getInitialSelectValue} from './select_'

describe('getInitialSelectValue', () => {
  it('returns empty string when options is missing', () => {
    expect(getInitialSelectValue()).toBe('')
  })

  it('returns empty string when options is empty array', () => {
    expect(getInitialSelectValue([])).toBe('')
  })

  it('returns first option value when options are valid', () => {
    expect(getInitialSelectValue([{value: 'A'}, {value: 'B'}])).toBe('A')
  })
})
