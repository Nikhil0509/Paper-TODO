import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Creating Globalized state
import { createStore } from 'redux';
import 'papercss/dist/paper.min.css';

import MainTodo from './components/MainTodo';
import rootReducer from './reducers';
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <MainTodo/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
