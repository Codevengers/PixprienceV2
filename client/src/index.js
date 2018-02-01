import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pixupload from './components/uploadbutton.js';
import Pix from './components/pic.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pixupload />, document.getElementById('root'));
ReactDOM.render(<Pix />, document.getElementById('pix'));
registerServiceWorker();
