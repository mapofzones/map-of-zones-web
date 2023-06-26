import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

export const comparisonSlice = createSlice({
  name: 'selectedComparisonZones',
  initialState,
  reducers: {
    initiateSelectedZones: (state, action) => {
      state = action.payload;
    },
    selectZone: (state, action) => {
      if (!state.includes(action.payload.zone)) {
        state.splice(action.payload.index, 1, action.payload.zone);
      }
    },
    deleteZone: (state, action) => {
      const index = state.findIndex((item) => item === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { actions, reducer } = comparisonSlice;
