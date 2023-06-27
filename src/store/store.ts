import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from 'services/Comparison';

import selectedComparisonZonesReducer from './selectedComparisonZones.slice';

const rootReducer = combineReducers({
  selectedComparisonZones: selectedComparisonZonesReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export type AppDispatch = AppStore['dispatch'];

export type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
};
