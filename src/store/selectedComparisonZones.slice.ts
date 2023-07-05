// import { createSlice } from '@reduxjs/toolkit';

// import { useActionCreators } from './hooks';

// const initialState: string[] = [];

// export const selectedComparisonZones = createSlice({
//   name: 'selectedComparisonZones',
//   initialState,
//   reducers: {
//     initiateSelectedZones: (state, action) => {
//       console.log('reducer initiateSelectedZones:', state, action.payload);
//       if (state.length === 0) {
//         state.push(...action.payload);
//       }
//     },
//     selectZone: (state, action) => {
//       if (!state.includes(action.payload.zone)) {
//         state.splice(action.payload.index, 1, action.payload.zone);
//       }
//     },
//     deleteZone: (state, action) => {
//       const index = state.findIndex((item) => item === action.payload);
//       if (index > -1) {
//         state.splice(index, 1);
//       }
//     },
//   },
// });

// export const { actions: selectedComparisonZonesActions } = selectedComparisonZones;

// export const useSelectedComparisonZonesActionsCreator = () =>
//   useActionCreators(selectedComparisonZones.actions);

// export default selectedComparisonZones.reducer;
