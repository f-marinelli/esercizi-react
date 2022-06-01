import { createStore } from 'redux';
import {
  CounterReducer,
  decrementCounter,
  incrementCounter,
} from './CounterState';

export const store = createStore(CounterReducer);
