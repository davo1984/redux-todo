import React from 'react'
import DisplayListButtons from './DisplayListButtons';
import DisplaySaveOptions from './DisplaySaveOptions';
import ListName from './ListName';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div>
        <ListName className='m-2' />
        <DisplayListButtons className='m-2' />
        <AddTodo />
        <VisibleTodoList />
        <DisplaySaveOptions />
    </div>
)

export default App