import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const todoItems = JSON.parse(localStorage.getItem("todoLists"));
console.log('initalState', todoItems);
const initialState = { 
    todos: [{ todoItems }] 
    // todos: [{id:123, text:'hello', completed: false}] 
  };

const store = createStore(
    rootReducer, /* preloadedState, */
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)