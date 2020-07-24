import React from 'react';
import { connect } from 'react-redux';
// import SaveItems from './SaveItems';
// import { getVisibleTodos, mapStateToProps } from '../containers/VisibleTodoList';
import { VisibilityFilters } from '../actions';
// import TodoList from '../components/TodoList';
import { Button } from 'react-bootstrap';

let todos = {}

const DisplaySaveOptions = () => (
    <div>
        <span className='ml-3'>Save: </span>
        <Button onClick={saveListAll} className='m-3' filter={VisibilityFilters.SHOW_ALL}>All Items</Button>
        <Button onClick={saveListActive} className='m-3' filter={VisibilityFilters.SHOW_ACTIVE}>Only Active Items</Button>
    </div>
)

export const mapStateListToProps = state => {
    todos = state.todos
    console.log('DisplaySaveOptions inside mapStateListToProps state', state.todos, state.todos.length);
    return { todos: getSaveTodos(state.todos, state.visibilityFilter) }
}

const getSaveTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos.todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.todos.filter(t => !t.completed)
        default:
            console.log('Unknown filter:', + filter)
            //   throw new Error('Unknown filter: ' + filter)
            return todos
    }
}

const saveListAll = (e) => {
    e.preventDefault();
    const listToSave = getSaveTodos(todos, 'SHOW_ALL');
    console.log('inside saveListAll', JSON.stringify(listToSave) );
    localStorage.setItem( "todoLists", JSON.stringify(listToSave) );
}

const saveListActive = (e) => {
    e.preventDefault();
    const listToSave = getSaveTodos(todos, VisibilityFilters.SHOW_ACTIVE);
    console.log('inside saveListActive', JSON.stringify(listToSave));
    localStorage.setItem( "todoLists", JSON.stringify(listToSave) );
}

// const ConnectedComponent = connect(
//     mapStateListToProps
//     )(DisplaySaveOptions)
export default connect(mapStateListToProps)(DisplaySaveOptions)