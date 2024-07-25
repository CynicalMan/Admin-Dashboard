import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "../models/Item.model";

interface CreateItem{
    userId: number;
    title: string;
    completed: boolean | null;
}

export const getItems = createAsyncThunk("items/getItems", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get<Item[]>("https://jsonplaceholder.typicode.com/todos");
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const getItem = createAsyncThunk("items/getItem", async (itemId: number, { rejectWithValue }) => {
    try {
        const response = await axios.get<Item>(`https://jsonplaceholder.typicode.com/todos/${itemId}`);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const addItem = createAsyncThunk(
    "items/addItem",
    async (newItem: CreateItem, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos", newItem);
            console.log(response);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }     
    }
);

export const updateItem = createAsyncThunk(
    "items/updateItem",
    async (updatedItem: Item, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `https://jsonplaceholder.typicode.com/todos/${updatedItem.id}`,
                updatedItem
            ); 
            console.log(updatedItem);
            
            console.log(response);
            return response.data;
        } catch (error:any ) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        } 
        
    }
);

export const deleteItem = createAsyncThunk(
    "items/deleteItem",
    async (itemId: number,{ rejectWithValue }) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${itemId}`)
            return itemId;
        } catch (error:any ) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        } 
        
    }
);
