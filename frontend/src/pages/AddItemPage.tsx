import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormFactory } from "../components/shared/FormFactory";
import AddItemFormDefinition from "../components/shared/Form/FieldDefinitions/AddItemFieldDefinition";
import { addItem } from "../api/itemsApi";
import { AppDispatch } from "../redux/store";
import { toast } from "react-toastify";

const AddItemPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const newItem = {
      userId: parseInt(data.userId),
      title: data.title,
      completed: data.completed === "true",
    };
    dispatch(addItem(newItem))
            .unwrap() 
            .then((res) => {
                toast.success(`Item with Id ${res.id} added successfully!`);
            })
            .catch((err: any) => {
                toast.error(`Failed to add item: ${err.message || err || 'Unknown error'}`);
            });
  };

  return (
    <div className=" p-4">
      <h1 className="text-2xl font-bold text-tSecondary mb-4">New Item</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-4">
        <div className="flex flex-wrap -mx-2">
          {AddItemFormDefinition.map((field, index) => (
            <FormFactory key={index} field={field} control={control} />
          ))}
        </div>
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-tPrimary bg-primary rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
