import React from 'react';
import ReactDOM from 'react-dom';
import Select from './select_';

describe('Select component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
  });

  it('renders safely when options is empty', () => {
    ReactDOM.render(<Select options={[]} />, container);
    const text = container.querySelector('p').textContent;
    expect(text).toBe('');
  });

  it('resets selected value when options removed', () => {
    ReactDOM.render(<Select options={[{value: 'v1'}]} />, container);
    expect(container.querySelector('p').textContent).toBe('v1');

    ReactDOM.render(<Select options={[]} />, container);
    expect(container.querySelector('p').textContent).toBe('');
  });
});
