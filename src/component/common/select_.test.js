import {getDefaultValue, normalizeOptions} from './select_'

describe('select_ helpers', () => {
  it('normalizeOptions returns empty array for invalid input', () => {
    expect(normalizeOptions()).toEqual([])
    expect(normalizeOptions(null)).toEqual([])
    expect(normalizeOptions('bad')).toEqual([])
  })

  it('normalizeOptions filters invalid option items', () => {
    const options = normalizeOptions([
      {value: 'v1'},
      null,
      {},
      {value: 0},
      {value: undefined},
      {value: 'v2'}
    ])

    expect(options).toEqual([{value: 'v1'}, {value: 0}, {value: 'v2'}])
  })

  it('getDefaultValue returns first option value or empty string', () => {
    expect(getDefaultValue([{value: 'v1'}, {value: 'v2'}])).toBe('v1')
    expect(getDefaultValue([])).toBe('')
  })
})
