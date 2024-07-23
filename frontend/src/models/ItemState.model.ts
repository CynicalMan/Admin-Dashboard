import { Item } from "./Item.model";

export interface ItemsState {
    items: Item[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}