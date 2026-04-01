import Select_ from '../select_'

describe('component/common/select_', () => {
  test('getInitialValue returns empty string for invalid options', () => {
    expect(Select_.getInitialValue({})).toBe('')
    expect(Select_.getInitialValue({ options: [] })).toBe('')
  })

  test('getInitialValue returns first option value', () => {
    expect(Select_.getInitialValue({
      options: [{ value: 'v1' }, { value: 'v2' }]
    })).toBe('v1')
  })
})
