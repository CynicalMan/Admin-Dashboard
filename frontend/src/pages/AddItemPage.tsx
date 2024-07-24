import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { addItem } from "../api/itemsApi";
import { AppDispatch } from "../redux/store";

const AddItemPage: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState({
        userId: "",
        title: "",
        completed: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = {
            userId: parseInt(formData.userId),
            title: formData.title,
            completed: formData.completed,
        };
        console.log(newItem);
        
        dispatch(addItem(newItem));
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
              onChange={handleChange}
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
              onChange={handleChange}
              className="ml-4 "
            />
            <label htmlFor="incomplete" className="ml-2 text-lg text-gray-600">
              In Progress
            </label>
          </div>
        </div>
        <button type="submit" className="w-48 bg-blue-600 text-white py-2 px-4 font-semibold rounded mt-8 cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
}

export default AddItemPage