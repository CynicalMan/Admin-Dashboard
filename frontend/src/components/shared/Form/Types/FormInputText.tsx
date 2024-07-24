import React from 'react';
import { Controller } from 'react-hook-form';

interface FormInputTextProps {
    name: string;
    control: any;
    label: string;
    type: string;
}

const FormInputText: React.FC<FormInputTextProps> = ({ name, control, label, type }) => {
    return (
        <div className="flex flex-col mb-4">
        <label className="mb-2 font-semibold text-gray-700">{label}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <input
                {...field}
                type={type}
                className="h-10 p-2 border border-gray-400 rounded"
            />
            )}
        />
        </div>
    );
};

export default FormInputText;
