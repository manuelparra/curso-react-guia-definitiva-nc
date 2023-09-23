import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  entities: [],
}

export const reducer = (state = initialState, action) =>  {
  switch(action.type) {
    case 'todo/add': {
      console.log('reducer!')
      return {
        ...state,
        entities: [{}]
      }
    }
    default: {
      return state
    }
  }
}

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(x => x)
  console.log(state, 'rendering')

  return (
    <div>
      <form>
        <input />
      </form>
      <button onClick={() => dispatch({ type: 'todo/add' })}>Mostrar todos</button>
      <button>Completados</button>
      <button>Incompletos</button>
      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
      </ul>
    </div> 
  )
}

export default App
