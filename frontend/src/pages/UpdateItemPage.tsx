import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, updateItem } from "../api/itemsApi";
import { AppDispatch, RootState } from "../redux/store";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { FormFactory } from "../components/shared/FormFactory";
import UpdateItemFormDefinition from "../components/shared/Form/FieldDefinitions/UpdateFieldDefinition";
import { toast } from "react-toastify";

const UpdateItemPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { items, status } = useSelector((state: RootState) => state.items);
    const { control, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (status === "idle" && id !== undefined) {
            const itemId = parseInt(id);
            dispatch(getItem(itemId));
        }
    }, [dispatch, id, status]);

    useEffect(() => {
        if (id !== undefined) {
            const itemId = parseInt(id);
            const currentItem = items.find(item => item.id === itemId);
            if (currentItem) {
                setValue("userId", currentItem.userId.toString());
                setValue("title", currentItem.title);
                setValue("completed", currentItem.completed ? "true" : "false");
            }
        }
    }, [items, id, setValue]);

    const onSubmit = (data: any) => {
        if (id !== undefined) {
            const itemId = parseInt(id);
            const newItem = {
                id: itemId,
                userId: parseInt(data.userId),
                title: data.title,
                completed: data.completed === "true",
            };
            dispatch(updateItem(newItem))
                .unwrap() 
                .then(() => {
                    toast.success(`Item with ID ${id} updated successfully!`);
                })
                .catch((err: any) => {
                    toast.error(`Failed to update item: ${err.message || err || 'Unknown error'}`);
                });
        }
    };

    return (
        <div className=" p-4">
            <h1 className="text-2xl text-tPrimary font-bold mb-4">Update Item</h1>
            <form className="w-full p-4"onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <div className="flex flex-wrap -mx-2">
                        {UpdateItemFormDefinition.map((field, index) => (
                            <FormFactory key={index} field={field} control={control} />
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 mt-4 text-tPrimary bg-primary rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateItemPage;
