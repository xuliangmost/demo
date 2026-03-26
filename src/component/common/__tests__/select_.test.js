import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../select_';

describe('component/common/select_', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('renders without crashing when options is empty', () => {
    ReactDOM.render(<Select options={[]} />, container);
  });

  test('renders without crashing when options is missing', () => {
    ReactDOM.render(<Select />, container);
  });
});
