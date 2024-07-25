import React from 'react';
import { Controller } from 'react-hook-form';

interface FormInputTextProps {
    name: string;
    control: any;
    label: string;
    type: string;
    disable: boolean;
}

const FormInputText: React.FC<FormInputTextProps> = ({ name, control, label,disable ,type }) => {
    console.log("FormInputText disable:", disable);
    
    return (
        <div className="flex flex-col mb-4">
        <label className="mb-2 font-semibold text-tSecondary">{label}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <input
                {...field}
                type={type}
                disabled={disable}
                className="h-10 p-2 border border-tSecondary text-tSecondary rounded"
            />
            )}
        />
        </div>
    );
};

export default FormInputText;
