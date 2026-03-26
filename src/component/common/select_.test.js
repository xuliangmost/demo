import {getInitialSelectValue} from './select_'

describe('select_ helper', () => {
  test('returns empty string when options is empty', () => {
    expect(getInitialSelectValue([])).toBe('')
  })

  test('returns empty string when options is invalid', () => {
    expect(getInitialSelectValue(null)).toBe('')
    expect(getInitialSelectValue(undefined)).toBe('')
    expect(getInitialSelectValue({})).toBe('')
  })

  test('returns first value when options is valid', () => {
    expect(getInitialSelectValue([{value: 'v1'}, {value: 'v2'}])).toBe('v1')
  })
})
