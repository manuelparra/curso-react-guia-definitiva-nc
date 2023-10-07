import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { fetchTrunk, selectTodos, selectStatus } from './features/todos'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => dispatch({ type: 'todo/complete', payload: todo })}
    >{todo.title}</li>
  )
}

const App = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const todos = useSelector(selectTodos)
  const status = useSelector(selectStatus)
 
  const submit = e => {
    e.preventDefault()
    if (!value.trim()) {
      return
    }
    const id = Math.random().toString(36)
    const todo = { title: value, complete: false, id }
    dispatch({ type: 'todo/add', payload: todo })
    setValue('')
  }

  if (status.loading === 'pending') {
    return <p>Cargando...</p>
  }
  
  if (status.loading === 'rejected') {
    return <p>{status.error}</p>
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
      </form>
      <br />
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'all' })}>Mostrar todos</button>
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'complete' })}>Completados</button>
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'incomplete' })}>Incompletos</button>
      <button onClick={() => dispatch(fetchTrunk())}>Fetch</button>

      <ul>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div> 
  )
}

export default App
