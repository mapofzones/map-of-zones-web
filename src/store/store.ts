import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer } from './comparison.slice';

const rootReducer = combineReducers({
  selectedComparisonZones: reducer,
});

export type AppDispatch = AppStore['dispatch'];

export type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
