import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button, Form, FormControl } from 'react-bootstrap';

let numTodos = 0;
let todos = {};

const mapCounterToProps = state => {
    numTodos: getTodos(state)
}

const getTodos = (todos) => {
    return todos.length
}

let nextTodoId = 0
const AddTodo = ({ dispatch }) => {
    numTodos = mapCounterToProps();

    // let nextTodoId = todos.length;
    console.log('mapCounterToProps', numTodos)
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

export default connect(mapCounterToProps)(AddTodo);