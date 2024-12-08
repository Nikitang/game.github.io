import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Choozer } from './types';

const initialState: Choozer = {
    level: 0,
};

const choozeSlice = createSlice({
    name: 'chooze',
    initialState,
    reducers: {
        setLevel(state, action: PayloadAction<number>) {
            state.level = action.payload;
        },
    },
});

export const { setLevel } = choozeSlice.actions;

export default choozeSlice.reducer;
