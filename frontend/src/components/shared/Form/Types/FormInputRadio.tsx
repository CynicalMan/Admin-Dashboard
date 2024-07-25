import React from 'react';
import { Controller } from 'react-hook-form';

interface FormInputRadioProps {
    name: string;
    control: any;
    label: string;
    disable: boolean;
    options: { value: string; label: string }[];
}

const FormInputRadio: React.FC<FormInputRadioProps> = ({ name, control,disable, label, options }) => {
    console.log("FormInputRadio disable:", disable);
    
    return (
        <div className="flex flex-col mb-4">
        <label className="mb-2 font-semibold text-tSecondary">{label}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <div className="flex flex-wrap text-tSecondary">
                {options.map((option) => (
                <label key={option.value} className="mr-4 text-tSecondary">
                    <input
                        {...field}
                        type="radio"
                        value={option.value}
                        checked={field.value === option.value}
                        disabled={disable}
                        className="mr-2 text-tSecondary"
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
