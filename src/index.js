import React from 'react';
import ReactDOM from 'react-dom';
import App from './output';
import registerServiceWorker from './registerServiceWorker';
import './component/common/common.css'
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App/>, root);
}
registerServiceWorker();
