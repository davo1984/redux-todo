import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import store from '../app/store.js';
import { Button, Form, FormControl } from 'react-bootstrap';

let numTodos = 0;
let todos = {};
let number = 2;
let largest = 0;
store.subscribe(() => {
    let props = store.getState()
    number = props.todos.todos.length
    console.log('props', number, props)
    console.log('props.todos', number, props.todos)
    console.log('props.todos.todos', number, props.todos.todos)
    var result = props.todos.todos.map(aTodo => ({ value: todos.id, text: todos.text }));
    console.log(result)
    largest = Math.max.apply(0, result.id);
    console.log('INSIDE OF THE SUBSCRIBED STORE', props.todos.todos[0], largest)
})

const AddTodo = ({ dispatch }) => {
    let nextTodoId = largest++;
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
                    store.dispatch(addTodo(input.value, nextTodoId))
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