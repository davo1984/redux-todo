import React from 'react'
import Footer from './Footer';
import ListName from './ListName';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div>
        <ListName className='m-2' />
        <Footer className='m-2' />
        <AddTodo />
        <VisibleTodoList />
    </div>
)

export default App