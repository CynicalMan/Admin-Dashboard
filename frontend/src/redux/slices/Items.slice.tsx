import { createSlice } from "@reduxjs/toolkit";
import { ItemsState } from "../../models/ItemState.model";
import { getItems, addItem, updateItem, deleteItem, getItem } from "../../api/itemsApi";

const initialState: ItemsState = {
    items: [],
    status: "idle",
    error: null,
};


const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getItems.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getItems.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
        })
        .addCase(getItems.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        })
        .addCase(getItem.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getItem.fulfilled, (state, action) => {
            state.status = "succeeded";
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex] = action.payload;
            } else {
                state.items.push(action.payload);
            }
        })
        .addCase(getItem.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        })
        .addCase(addItem.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(addItem.rejected, (state, action) => {
            state.error = action.payload as string;
        })
        .addCase(updateItem.fulfilled, (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        })
        .addCase(updateItem.rejected, (state, action) => {
            state.error = action.payload as string;
        })
        .addCase(deleteItem.fulfilled, (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        })
        .addCase(deleteItem.rejected, (state, action) => {
            state.error = action.payload as string;
        });
    },
});

export default itemsSlice.reducer;
