import { createSelector, createSlice } from '@reduxjs/toolkit';

import { useActionCreators } from './hooks';
import { RootState } from './types';

export interface ZonesComparisonState {
  zones: string[];
  isComparison: boolean;
}

export const selectedCompareZonesSelector = (state: RootState) =>
  state.zonesPageComparisonMode.zones;

const isAvailableComparisonSelector = (state: RootState) =>
  state.zonesPageComparisonMode.zones.length < 3;

// eslint-disable-next-line sort-exports/sort-exports
export const isZoneCheckedSelector = createSelector(
  [selectedCompareZonesSelector, (items, zoneKey: string) => zoneKey],
  (zones, zoneKey) => zones.includes(zoneKey)
);

export const isZoneDisabledToCompareSelector = createSelector(
  [isAvailableComparisonSelector, isZoneCheckedSelector],
  (isAvailable, isChecked) => !isAvailable && !isChecked
);

export const useZonesPageComparisonModeActionsCreator = () =>
  useActionCreators(zonesPageComparisonModeSlice.actions);

export const zonesPageComparisonModeSlice = createSlice({
  name: 'zonesPageComparisonMode',
  initialState: {
    zones: [] as string[],
    isComparison: false,
  } as ZonesComparisonState,
  reducers: {
    addZoneToCompare: (state, action) => {
      if (state.zones.length >= 3) return;

      state.zones.push(action.payload);
    },
    removeZoneFromCompare: (state, action) => {
      const index = state.zones.findIndex((item) => item === action.payload);
      if (index > -1) {
        state.zones.splice(index, 1);
      }
    },
    toggleZone: (state, action) => {
      let check = action.payload.check;
      if (check === undefined) {
        check = !state.zones.includes(action.payload.zone);
      }

      if (check) {
        if (state.zones.length >= 3) return;

        state.zones.push(action.payload.zone);
      } else {
        const index = state.zones.findIndex((item) => item === action.payload.zone);
        if (index > -1) {
          state.zones.splice(index, 1);
        }
      }
    },
    resetZones: (state, action) => {
      state.zones = [];
    },
    switchCompareMode: (state, action) => {
      state.isComparison = !state.isComparison;
    },
    resetState: (state, action) => {
      state.zones = [];
      state.isComparison = false;
    },
  },
});

export default zonesPageComparisonModeSlice.reducer;
