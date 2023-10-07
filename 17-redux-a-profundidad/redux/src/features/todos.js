import { combineReducers } from 'redux'
import { makeActionCreator, makeFetchingReducer, makeSetReducer, reduceReducers, makeCrudReducer } from './utils'

export const fetchTrunk = () => async dispatch => {
  dispatch(setPending())
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    const todos = data.slice(0, 10)
    dispatch(setFulfillled(todos))
  } catch (e) {
    dispatch(setError(e.message))
  }
}

export const setPending = () => makeActionCreator('todos/pending')
export const setTodoAdd = makeActionCreator('todo/add', 'payload')
export const setFulfillled = makeActionCreator('todos/fulfilled', 'payload')
export const setError  = makeActionCreator('todos/error', 'error')
export const setComplete = makeActionCreator('todo/complete', 'payload')
export const setFilter = makeActionCreator('filter/set', 'payload')

export const filterReducer = makeSetReducer(['filter/set'])

export const fetchingReducer = makeFetchingReducer(['todos/pending', 'todos/fulfilled', 'todos/rejected'])

const fullFilledReducer = makeSetReducer(['todos/fulfilled']) 

const crudReducer = makeCrudReducer(['todo/add', 'todo/complete'])

export const todosReducer = reduceReducers(crudReducer, fullFilledReducer)

export const reducer = combineReducers({
  todos: combineReducers({
    entities: todosReducer,
    status: fetchingReducer,
  }),
  filter: filterReducer,
})


export const selectTodos = state => {
  const { todos: { entities }, filter } = state
  
  if (filter === 'complete') {
    return entities.filter(todo => todo.completed)
  }

  if (filter === 'incomplete') {
    return entities.filter(todo => !todo.completed)
  }

  return entities
}

export const selectStatus = state => state.todos.status 
