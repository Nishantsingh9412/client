import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createRoot, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Redux/reducer';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
document.getElementById('root') 
)
