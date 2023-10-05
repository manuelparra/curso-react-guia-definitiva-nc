import { combineReducers } from 'redux'
import { makeFetchingReducer, makeSetReducer } from './utils'

export const fetchTrunk = () => async dispatch => {
  dispatch(setPending())
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    const todos = data.slice(0, 10)
    dispatch(setFulfillled(todos))
  } catch (e) {
    dispatch(setError())
  }
}

export const setPending = () => {
  return {
    type: 'todos/pending'    
  }
}

export const setTodoAdd = payload => ({ type: 'todo/add', payload })

export const setFulfillled = payload => ({ type: 'todos/fulfilled', payload })

export const setError = e => ({ type: 'todos/error', error: e.message })

export const setComplete = payload => ({ type: 'todo/complete', payload })

export const setFilter = payload => ({ type: 'filter/set', payload })

export const filterReducer = makeSetReducer([
  'filter/set'
])

export const fetchingReducer = makeFetchingReducer([
  'todos/pending',
  'todos/fulfilled',
  'todos/rejected'
])

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'todos/fulfilled': {
      return action.payload
    }
    case 'todo/add': {
      return state.concat({ ...action.payload })
    }   
    case 'todo/complete': {
      const newTodos = state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })
      return newTodos
    }
    default: 
      return state
  }
}

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
