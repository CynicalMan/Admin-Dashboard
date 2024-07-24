import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getItem, updateItem } from "../api/itemsApi";
import { AppDispatch, RootState } from "../redux/store";
import { useParams } from "react-router";
import { Item } from "../models/Item.model";

const UpdateItemPage: React.FC = () => {
    const {id} = useParams<{id: string}>();
    const dispatch = useDispatch<AppDispatch>();
    const { items,status } = useSelector((state: RootState) => state.items);

    useEffect(() => {
        if (status === "idle" && id !== undefined) {
            console.log(id);
            const itemId = parseInt(id);
            dispatch(getItem(itemId))
        }
    }, [dispatch, id, status]);

    const [formData, setFormData] = useState({
        userId: "",
        title: "",
        completed: false,
    });

    useEffect(() => {
        if (id !== undefined) {
            const itemId = parseInt(id);
            const currentItem = items.find(item => item.id === itemId);
            if (currentItem) {                
                setFormData({
                    userId: currentItem.userId.toString(),
                    title: currentItem.title,
                    completed: currentItem.completed || false,
                });
            }
        }
    }, [items, id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        console.log(formData.completed," 2 erger");
        
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        
        setFormData({
            ...formData,
            completed: value === "true",
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        
        if (id !== undefined) {
            const itemId = parseInt(id);
            const newItem: Item = {
                id: itemId,
                userId: parseInt(formData.userId),
                title: formData.title,
                completed: formData.completed,
            };
            console.log(newItem);
            
            dispatch(updateItem(newItem));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">New User</h1>
            <form className="flex flex-wrap" onSubmit={handleSubmit}>
                <div className="w-96 flex flex-col mt-2 mr-4">
                    <label className="mb-2 text-sm font-semibold text-gray-600">
                        User Id
                    </label>
                    <input
                        type="text"
                        placeholder="1"
                        name="userId"
                        className="h-10 p-2 border border-gray-400 rounded"
                        value={formData.userId}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-96 flex flex-col mt-2 mr-4">
                    <label className="mb-2 text-sm font-semibold text-gray-600">
                        Title
                    </label>
                    <input
                        type="text"
                        placeholder="lorem ipsum"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="h-10 p-2 border border-gray-400 rounded"
                    />
                </div>
                <div className="w-96 flex flex-col mt-2 mr-4">
                    <label className="mb-2 text-sm font-semibold text-gray-600">
                        Task Status
                    </label>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="status"
                            id="completed"
                            value="true"
                            className=""
                            checked={formData.completed === true}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="completed" className="ml-2 text-lg text-gray-600">
                            Completed
                        </label>
                        <input
                            type="radio"
                            name="status"
                            id="incomplete"
                            value="false"
                            checked={formData.completed === false}
                            onChange={handleRadioChange}
                            className="ml-4 "
                        />
                        <label htmlFor="incomplete" className="ml-2 text-lg text-gray-600">
                            In Progress
                        </label>
                    </div>
                </div>
                <button className="w-48 bg-blue-600 text-white py-2 px-4 font-semibold rounded mt-8 cursor-pointer">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateItemPage;
