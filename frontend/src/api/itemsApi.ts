import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "../models/Item.model";

interface CreateItem{
    userId: number;
    title: string;
    completed: boolean | null;
}

export const getItems = createAsyncThunk("items/getItems", async () => {
    const response = await axios.get<Item[]>("https://jsonplaceholder.typicode.com/todos"); 
    return response.data;
});

export const getItem = createAsyncThunk("items/getItem", async (itemId: number) => {
    const response = await axios.get<Item>(`https://jsonplaceholder.typicode.com/todos/${itemId}`); 
    console.log(response);
    console.log("h");
    
    
    return response.data;
});

export const addItem = createAsyncThunk(
    "items/addItem",
    async (newItem: CreateItem) => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", newItem);
        console.log(response);
        
        return response.data;
    }
);

export const updateItem = createAsyncThunk(
    "items/updateItem",
    async (updatedItem: Item) => {
        const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updatedItem.id}`,
        updatedItem
        ); 

        console.log(response);
        console.log("h  ggg");
        return response.data;
    }
);

export const deleteItem = createAsyncThunk(
    "items/deleteItem",
    async (itemId: number) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${itemId}`)
            .then(res => console.log(res))
            .catch(error => console.log(error)); 
        return itemId;
    }
);
