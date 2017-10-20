import React from 'react';
import ReactDOM from 'react-dom';
import App from './output';
import registerServiceWorker from './registerServiceWorker';
import './component/common/common.less'

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
