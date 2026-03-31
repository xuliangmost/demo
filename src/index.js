import React from 'react';
import ReactDOM from 'react-dom';
import App from './output';
import registerServiceWorker from './registerServiceWorker';
import './component/common/common.css'
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<App/>, rootElement);
} else {
  console.error('Root element #root was not found.');
}
registerServiceWorker();
