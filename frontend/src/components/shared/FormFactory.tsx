// FormFactory.tsx
import React from 'react';
import FormInputText from './Form/Types/FormInputText';
import FormInputRadio from './Form/Types/FormInputRadio';

interface FormFactoryProps {
  field: any;
  control: any;
}

export const FormFactory: React.FC<FormFactoryProps> = ({ field, control }) => {
  
  console.log("FormFactory field:", field);
  const renderFieldComponent = () => {
    switch (field.componentType) {
      case 'text':
        return <FormInputText 
                  control={control} 
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  disable={field.disable}
                />;
      case 'radio':
        return <FormInputRadio 
                  name={field.name}
                  control={control}
                  label={field.label}
                  options={field.options}
                  disable={field.disable}
                />;
      default:
        return null;
    }
  };

  return <div className={`p-2 ${field.grid}`}>{renderFieldComponent()}</div>;
};
