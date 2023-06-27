import { useMemo } from 'react';

import { bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { selectedComparisonZonesActions } from 'store/selectedComparisonZones.slice';
import { AppDispatch, RootState } from 'store/store';

const rootActions = {
  ...selectedComparisonZonesActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
