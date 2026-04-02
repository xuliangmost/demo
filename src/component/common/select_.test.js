import {getInitialSelectValue, normalizeOptions} from './select_'

describe('component/common/select_', () => {
  test('normalizeOptions should return empty array for non-array input', () => {
    expect(normalizeOptions(undefined)).toEqual([])
    expect(normalizeOptions(null)).toEqual([])
    expect(normalizeOptions({})).toEqual([])
  })

  test('normalizeOptions should preserve array input', () => {
    const options = [{value: 'a'}]
    expect(normalizeOptions(options)).toBe(options)
  })

  test('getInitialSelectValue should return first value when options valid', () => {
    expect(getInitialSelectValue([{value: 'value1'}, {value: 'value2'}])).toBe('value1')
  })

  test('getInitialSelectValue should fallback to empty string when options invalid', () => {
    expect(getInitialSelectValue([])).toBe('')
    expect(getInitialSelectValue([{label: 'missing value'}])).toBe('')
    expect(getInitialSelectValue(undefined)).toBe('')
  })
})
