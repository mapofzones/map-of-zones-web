import { createSlice } from '@reduxjs/toolkit';

import { useActionCreators } from './hooks';

export const useZonesPageComparisonModeActionsCreator = () =>
  useActionCreators(zonesPageComparisonModeSlice.actions);

export const zonesPageComparisonModeSlice = createSlice({
  name: 'zonesPageComparisonMode',
  initialState: {
    zones: [] as string[],
    isComparison: false,
  },
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
    resetZones: (state, action) => {
      state.zones = [];
    },
    switchCompareMode: (state, action) => {
      state.isComparison = !state.isComparison;
      console.log(state.isComparison);
    },
  },
});

export default zonesPageComparisonModeSlice.reducer;
