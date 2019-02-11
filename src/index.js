import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import history from './utils/history';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(<Router history={history} >
                  <Provider store={store}>
                    <Route component={App}/>
                  </Provider>
                </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
