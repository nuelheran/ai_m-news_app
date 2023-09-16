import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import logo from './images/logo.png';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const index = () => {
  return (
    <div>index</div>
  )
}

export default index
export {logo}
