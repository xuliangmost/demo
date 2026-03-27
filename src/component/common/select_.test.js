import {getInitialSelectValue} from './select_'

describe('getInitialSelectValue', () => {
  it('returns empty string for invalid options', () => {
    expect(getInitialSelectValue()).toBe('')
    expect(getInitialSelectValue([])).toBe('')
    expect(getInitialSelectValue(null)).toBe('')
  })

  it('returns first option value for valid options', () => {
    const options = [{value: 'first'}, {value: 'second'}]
    expect(getInitialSelectValue(options)).toBe('first')
  })
})
