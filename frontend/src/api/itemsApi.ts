import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "../models/Item.model";

export const getItems = createAsyncThunk("items/getItems", async () => {
    const response = await axios.get("/api/items"); 
    return response.data;
});

export const addItem = createAsyncThunk(
    "items/addItem",
    async (newItem: Omit<Item, "id">) => {
        const response = await axios.post("/api/items", newItem); 
        return response.data;
    }
);

export const updateItem = createAsyncThunk(
    "items/updateItem",
    async (updatedItem: Item) => {
        const response = await axios.put(
        `/api/items/${updatedItem.id}`,
        updatedItem
        ); 
        return response.data;
    }
);

export const deleteItem = createAsyncThunk(
    "items/deleteItem",
    async (itemId: number) => {
        await axios.delete(`/api/items/${itemId}`); 
        return itemId;
    }
);
