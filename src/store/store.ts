import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { graphqlApi } from 'services/baseGraphqlApi';
import { restApi } from 'services/baseRestApi';

import selectedComparisonZonesReducer from './selectedComparisonZones.slice';

const rootReducer = combineReducers({
  selectedComparisonZones: selectedComparisonZonesReducer,
  [graphqlApi.reducerPath]: graphqlApi.reducer,
  [restApi.reducerPath]: restApi.reducer,
});

export type AppDispatch = AppStore['dispatch'];

export type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(graphqlApi.middleware).concat(restApi.middleware),
  });
};
