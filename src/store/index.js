import { configureStore, combineReducers } from '@reduxjs/toolkit';
import myCardsReducer from './myCardsSlice';
import contragentsReducer from './contragentsSlice';

const rootReducer = combineReducers({
  myCards: myCardsReducer,
  contragents: contragentsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
