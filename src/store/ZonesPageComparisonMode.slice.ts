import { createSlice } from '@reduxjs/toolkit';

import { useActionCreators } from './hooks';

export const useZonesPageComparisonModeActionsCreator = () =>
  useActionCreators(zonesPageComparisonModeSlice.actions);

export const zonesPageComparisonModeSlice = createSlice({
  name: 'zonesPageComparisonMode',
  initialState: {
    zones: [],
    isComparison: false,
  },
  reducers: {
    addZoneToCompare: (state, action) => {
      console.log(state);
    },
    switchCompareMode: (state, action) => {
      state.isComparison = !state.isComparison;
      console.log(state.isComparison);
    },
  },
});

export default zonesPageComparisonModeSlice.reducer;
