import React from 'react';
import { Controller } from 'react-hook-form';

interface FormInputRadioProps {
    name: string;
    control: any;
    label: string;
    options: { value: string; label: string }[];
}

const FormInputRadio: React.FC<FormInputRadioProps> = ({ name, control, label, options }) => {
    return (
        <div className="flex flex-col mb-4">
        <label className="mb-2 font-semibold text-gray-700">{label}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <div className="flex flex-wrap">
                {options.map((option) => (
                <label key={option.value} className="mr-4">
                    <input
                    {...field}
                    type="radio"
                    value={option.value}
                    checked={field.value === option.value}
                    className="mr-2"
                    />
                    {option.label}
                </label>
                ))}
            </div>
            )}
        />
        </div>
    );
};

export default FormInputRadio;
