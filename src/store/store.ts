import { combineReducers, configureStore } from '@reduxjs/toolkit';

import selectedComparisonZonesReducer from './selectedComparisonZones.slice';

const rootReducer = combineReducers({
  selectedComparisonZones: selectedComparisonZonesReducer,
});

export type AppDispatch = AppStore['dispatch'];

export type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
