import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button, Form, FormControl } from 'react-bootstrap';

const numTodos = 1;

const mapCounterToProps = state => {
    if ("state" in window) {
        numTodos = state.todos.todos.length;
        console.log('todos #', numTodos);
    } else {console.log('todos, #', state, numTodos);}

    
    return numTodos - 1
    // {
    //     todos: getSaveTodos(state.todos, state.visibilityFilter)
    // }
}

const AddTodo = ({ dispatch }) => {
    let nextTodoId = mapCounterToProps();
    console.log('mapCounterToProps', nextTodoId)
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