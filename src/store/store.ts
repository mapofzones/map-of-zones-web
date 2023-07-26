import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { graphqlApi } from 'services/baseGraphqlApi';
import { restApi } from 'services/baseRestApi';

import zonesPageComparisonModeReducer from './ZonesPageComparisonMode.slice';

export const rootReducer = combineReducers({
  zonesPageComparisonMode: zonesPageComparisonModeReducer,
  [graphqlApi.reducerPath]: graphqlApi.reducer,
  [restApi.reducerPath]: restApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(graphqlApi.middleware).concat(restApi.middleware),
  });
};