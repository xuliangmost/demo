import React from 'react';
import ReactDOM from 'react-dom';
import App from './output';
import registerServiceWorker from './registerServiceWorker';
import './component/common/common.css'
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element with id "root" was not found.');
}

ReactDOM.render(<App/>, rootElement);
registerServiceWorker();
