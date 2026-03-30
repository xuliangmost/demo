import React from 'react';
import ReactDOM from 'react-dom';
import Select from './select_';

describe('component/common/select_', () => {
  it('renders safely when options is missing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Select />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders safely when options is empty array', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Select options={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
