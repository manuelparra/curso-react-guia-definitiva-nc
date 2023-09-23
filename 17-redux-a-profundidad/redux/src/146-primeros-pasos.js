import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createStore } from 'redux'
import App from './App'
import reportWebVitals from './reportWebVitals';

const store = createStore((state = { lala: 1 }, action) => { // esta función es un reducer
  // action = { type: 'tipo de acción', payload: any }
  switch (action.type) {
    case 'accion': {
      return action.payload
    }
    case 'acciondos': {
      return action.payload
    }
  }

  return state
})

store.dispatch({ type: 'accion', payload: 2 })
store.dispatch({ type: 'acciondos', payload: 15 })
store.dispatch({ type: 'accionindefinida', payload: 15 })
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
