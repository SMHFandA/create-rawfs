import { configureStore } from '@reduxjs/toolkit';

import appFieldReducer from 'app/ducks/appField.duck';

export const store = configureStore({
  reducer: {
    appField: appFieldReducer,
  },
});

export type GetState = typeof store.getState;

export type RootState = ReturnType<GetState>;

export type AppDispatch = typeof store.dispatch;
