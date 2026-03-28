import React from 'react';
import ReactDOM from 'react-dom';
import Select_, {getInitialSelectValue} from './select_';

describe('Select_ component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
  });

  test('getInitialSelectValue should return empty for invalid options', () => {
    expect(getInitialSelectValue()).toBe('');
    expect(getInitialSelectValue([])).toBe('');
    expect(getInitialSelectValue([{}])).toBe('');
    expect(getInitialSelectValue([{value: null}])).toBe('');
  });

  test('getInitialSelectValue should return first option value', () => {
    expect(getInitialSelectValue([{value: 'v1'}, {value: 'v2'}])).toBe('v1');
  });

  test('render should not crash with empty options', () => {
    expect(() => ReactDOM.render(<Select_ options={[]} />, container)).not.toThrow();
    expect(() => ReactDOM.render(<Select_ />, container)).not.toThrow();
  });
});
