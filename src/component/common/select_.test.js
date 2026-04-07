import {getInitialSelectValue} from './select_'

describe('getInitialSelectValue', () => {
  test('returns empty string when options is undefined', () => {
    expect(getInitialSelectValue()).toBe('')
  })

  test('returns empty string when options is empty', () => {
    expect(getInitialSelectValue([])).toBe('')
  })

  test('returns first valid option value', () => {
    const options = [null, {name: 'x'}, {value: 'v1'}, {value: 'v2'}]
    expect(getInitialSelectValue(options)).toBe('v1')
  })
})
