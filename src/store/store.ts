import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { api } from 'services/baseApi';

import selectedComparisonZonesReducer from './selectedComparisonZones.slice';

const rootReducer = combineReducers({
  selectedComparisonZones: selectedComparisonZonesReducer,
  [api.reducerPath]: api.reducer,
});

export type AppDispatch = AppStore['dispatch'];

export type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });
};
