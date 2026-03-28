import Select from '../select_'

describe('component/common/select_', () => {
  it('constructor should not crash when options is missing', () => {
    expect(() => {
      new Select({})
    }).not.toThrow()
  })

  it('getOptions should filter invalid option entries', () => {
    const instance = new Select({options: [{value: 'a'}, null, {}, {value: 'b'}]})
    expect(instance.getOptions({options: [{value: 'a'}, null, {}, {value: 'b'}]})).toEqual([
      {value: 'a'},
      {value: 'b'}
    ])
  })
})
