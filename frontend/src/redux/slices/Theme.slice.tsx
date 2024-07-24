// src/redux/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeEnum } from "../../enums/ThemeEnum";

interface ThemeState {
    currentTheme: ThemeEnum;
}

const initialState: ThemeState = {
    currentTheme: ThemeEnum.BLUE,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeEnum>) => {
            state.currentTheme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
