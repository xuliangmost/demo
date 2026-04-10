import {getSafeOptions} from './select_'

describe('getSafeOptions', () => {
  test('returns empty array when options is not array', () => {
    expect(getSafeOptions(null)).toEqual([])
    expect(getSafeOptions(undefined)).toEqual([])
    expect(getSafeOptions('not-array')).toEqual([])
  })

  test('filters invalid items and keeps valid values', () => {
    const result = getSafeOptions([
      null,
      {},
      {value: undefined},
      {value: null},
      {value: 'value1'},
      {value: 2}
    ])
    expect(result).toEqual([{value: 'value1'}, {value: 2}])
  })
})
