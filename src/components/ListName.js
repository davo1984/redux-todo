import React from 'react';
import { connect } from 'react-redux';
// import FilterLink from '../containers/FilterLink';
import { addList } from '../actions';
import { Button, Form, FormControl } from 'react-bootstrap';

const ListName = () => (
    <div>
        {/* <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink> */}
        {/* </div>
    <div> */}
        {/* <Form inline
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addList(input.value))
                input.value = ''
            }}
        > */}
            <h4 className='m-3 pt-1'>List: </h4>
            {/* <Button variant='info' className='m-3' type="submit">New List</Button>
            <FormControl type="text" placeholder="New List" className="mr-sm-2" ref={node => (input = node)} />
        </Form> */}
    </div>
)

export default connect()(ListName);