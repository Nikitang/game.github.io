import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispach = typeof store.dispatch;

export const useAppDispach = () => useDispatch<AppDispach>();
