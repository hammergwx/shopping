import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom';
import "./iconfont/iconfont.css"
import App from './router/index';
import StoreContext from './context/StoreContext'
import store from './store/index'
import './config/rem'
ReactDOM.render(<StoreContext.Provider value={store}>
    <App />
</StoreContext.Provider>
    , document.getElementById('root'));

