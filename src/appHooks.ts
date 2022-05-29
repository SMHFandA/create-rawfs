import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from './appStore';

export const useAppDispatch = (): any => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
