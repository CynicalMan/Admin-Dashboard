import React from "react";
import { useForm } from "react-hook-form";
import { FormFactory } from "../FormFactory";
import AddItemFormDefinition from "./FieldDefinitions/AddItemFieldDefinition";

const AddItemForm: React.FC = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg mx-auto p-4"
        >
        <div className="flex flex-wrap -mx-2">
            {AddItemFormDefinition.map((field, index) => (
            <FormFactory key={index} field={field} control={control} />
            ))}
        </div>
        <button
            type="submit"
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
            Add Item
        </button>
        </form>
    );
};

export default AddItemForm;
