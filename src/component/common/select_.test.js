import Select_ from './select_'

describe('Select_ component', () => {
  it('handles missing options without crashing', () => {
    const instance = new Select_({});

    expect(instance.state.selectValue).toBe('');
    expect(() => instance.render()).not.toThrow();
  });

  it('uses first option value as default selection', () => {
    const instance = new Select_({
      options: [{value: 'value1'}, {value: 'value2'}]
    });

    expect(instance.state.selectValue).toBe('value1');
  });
});
