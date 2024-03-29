export const reduceReducers = (...reducer) => (state, action) => 
  reducer.reduce((acc, el) => el(acc, action), state)

export const makeActionType = entity => ([
  `${entity}/pending`,
  `${entity}/fulfilled`,
  `${entity}/rejected`
])

const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => {
    action[arg] = args[index]
  })
  return action
}

export const asyncMac = asyncTypes => ([
  makeActionCreator(asyncTypes[0]),
  makeActionCreator(asyncTypes[1], 'payload'),
  makeActionCreator(asyncTypes[2], 'error'),
])

const initialFetching = { loading: 'idle', error: null } // idle, pending, succeeded, rejected

export const makeFetchingReducer = actions => (state = initialFetching, action) => {
  switch (action.type) {
    case actions[0]: {
      return { ...state, loading: 'pending' }
    }
    case actions[1]: {
      return { ...state, loading: 'succeeded' }
    }
    case actions[2]: {
      return { error: action.error, loading: 'rejected' }
    }
    default: 
      return state
  }
}

export const makeSetReducer = actions => (state = 'all', action) => {
  switch (action.type) {
    case actions[0]: {
      return action.payload
    }
    default: 
      return state
  }
}

export const makeCrudReducer = actions => (state = [], action) => {
  switch (action.type) {
    case actions[0]: {
      return state.concat({ ...action.payload })
    }   
    case actions[1]: {
      const newEntities = state.map(entity => {
        if (entity.id === action.payload.id) {
          return { ...entity, completed: !entity.completed }
        }

        return entity
      })
      return newEntities
    }
    case actions[2]: {
      return state.filter(todo => todo.id !== action.payload )
    }
    default: 
      return state 
  }
}
