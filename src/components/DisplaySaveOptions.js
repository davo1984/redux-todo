import React from 'react';
// import SaveItems from './SaveItems';
import { VisibilityFilters } from '../actions';
import { Button } from 'react-bootstrap';
// import { VisibilityFilters } from '../actions';

const saveList = () => {
    const savedList = state ;
        console.log('savedList', savedList);
    
}

const DisplaySaveOptions = () => (
    <div>
        <span className='ml-3'>Save: </span>
        <Button onClick='saveList'>All Items</Button>
        <Button onClick='saveList'>Only Active Items</Button>
    </div>
)

export default DisplaySaveOptions;