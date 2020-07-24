import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const todoReturned = localStorage.getItem("todoLists");
console.log('stored state', todoReturned)
let todoItems = []

if (todoItems === null) {
    todoItems = [{ 'id': 0, 'text': "Have a good day", 'completed': false }]
} else {
    todoItems = JSON.parse(todoReturned);
}

// if (todoReturned !== null) {
//     todoItems = JSON.parse(todoReturned);
// }

let initialState = {
    todos: []
};

if (todoItems !== null) {
    initialState = {
        todos: [...todoItems]
    };
}
console.log('initial state loaded', initialState)
// if ( todoItems !== null ) {
//     console.log('todoItems returned, length', todoItems, todoItems.length);
//     initialState = { todos: [] };
// }
  
const store = createStore(
    rootReducer, /* preloadedState, */
    // initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)