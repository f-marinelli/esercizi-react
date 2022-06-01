import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { decrementCounter, incrementCounter } from './state/CounterState';
import { store } from './state/Store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <App />
//   </>
// );

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(3));
store.dispatch(decrementCounter(2));
