import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import choozeSlice from './choozeLevel/slice';

export const store = configureStore({
    reducer: { choozeSlice },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispach = typeof store.dispatch;

export const useAppDispach = () => useDispatch<AppDispach>();
