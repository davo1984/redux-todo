// let nextTodoId = 0
export const addTodo = (text, nextTodoId) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

let nextListId = 0
export const addList = (text, nextListId) => ({
    type: 'ADD_LIST',
    // id: nextListId++,
    text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}