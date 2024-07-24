import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormFactory } from "../components/shared/FormFactory";
import AddItemFormDefinition from "../components/shared/Form/FieldDefinitions/AddItemFieldDefinition";
import { addItem } from "../api/itemsApi";
import { AppDispatch } from "../redux/store";

const AddItemPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const newItem = {
      userId: parseInt(data.userId),
      title: data.title,
      completed: data.completed === "true",
    };
    dispatch(addItem(newItem));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Item</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto p-4">
        <div className="flex flex-wrap -mx-2">
          {AddItemFormDefinition.map((field, index) => (
            <FormFactory key={index} field={field} control={control} />
          ))}
        </div>
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
