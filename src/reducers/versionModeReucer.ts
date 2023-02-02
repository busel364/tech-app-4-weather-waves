import { createSlice } from "@reduxjs/toolkit";

const defState = false;

const versionModeSlice = createSlice({
    initialState: defState,
    name: 'versionMode',
    reducers: {
        changeMode(state) {
            return !state;
        }
    }
})

export const { changeMode } = versionModeSlice.actions;
export default versionModeSlice.reducer;