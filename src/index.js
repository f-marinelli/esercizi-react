import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { decrementCounter, incrementCounter } from './state/CounterState';
import { store } from './state/Store';
import { addTodo, removeTodo, resetTodos } from './state/TodosState';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <App />
//   </>
// );

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo({ id: 1, title: 'React', completed: true }));
store.dispatch(addTodo({ id: 2, title: 'SWR', completed: true }));
store.dispatch(addTodo({ id: 3, title: 'Redux', completed: false }));
store.dispatch(removeTodo(1));
store.dispatch(removeTodo(3));
store.dispatch(resetTodos());
// store.dispatch(incrementCounter(5));
// store.dispatch(incrementCounter(3));
// store.dispatch(decrementCounter(2));
