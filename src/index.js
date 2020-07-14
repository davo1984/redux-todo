import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.css";

const todoItems = JSON.parse(localStorage.getItem("todoLists"));
console.log('initalState', todoItems);
const initialState = { todos: [] };
if ( todoItems !== null ) {
    initialState = { 
        todos: [ ...todoItems ] 
    };
}
  
const store = createStore(
    rootReducer, /* preloadedState, */
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)