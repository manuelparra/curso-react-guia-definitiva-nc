import { combineReducers } from 'redux'
import { makeActionType, makeFetchingReducer, makeSetReducer, makeCrudReducer, reduceReducers, asyncMac } from './utils'

const asyncTodos = makeActionType('todos')

const [setPending, setFulfilled, setError] = asyncMac(asyncTodos) 

export const fetchTrunk = () => async dispatch => {
  dispatch(setPending())
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    const todos = data.slice(0, 10)
    dispatch(setFulfilled(todos))
  } catch (e) {
    dispatch(setError(e.message))
  }
}

export const filterReducer = makeSetReducer(['filter/set'])

export const fetchingReducer = makeFetchingReducer(asyncTodos)

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
