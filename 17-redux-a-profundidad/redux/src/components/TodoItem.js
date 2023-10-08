import { useDispatch } from 'react-redux'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  return (
    <>
      <li
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => dispatch({ type: 'todo/complete', payload: todo })}
      >{todo.title}</li>
      <span onClick={() => dispatch({ type: 'todo/delete', payload: todo.id })}>delete</span>
    </>
  )
}

export default TodoItem
