import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import store from '../app/store.js';
import { Button, Form, FormControl } from 'react-bootstrap';

let numTodos = 0;
let todos = {};
let number = 2
// store.subscribe((state) => {
//     // number = state.todos.todos.length
//     console.log('INSIDE OF THE SUBSCRIBED STORE', store.getState())
// })
// const mapCounterToProps = (state, ownProps) => {
//     console.log('inside mapConterToProps', number, store.getState())
//     // const number = 2;
//     return number
// }

// const getTodos = (todos) => {
//     return todos.length
// }

// let nextTodoId = 0
const AddTodo = ({ dispatch }) => {
    // nextTodoId = mapCounterToProps();
    // nextTodoId = mapCounterToProps();

    // let nextTodoId = todos.length;
    // console.log('mapCounterToProps returned', nextTodoId)
    let input

    return (
        <div>
            <Form inline
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value, nextTodoId))
                    input.value = ''
                }}
            >
                <Button variant='info' className='m-3' type="submit">Add Todo</Button>
                <FormControl type="text" placeholder="New ToDo" className="mr-sm-2" ref={node => (input = node)} />
            </Form>
        </div>
    )
}

export default AddTodo;