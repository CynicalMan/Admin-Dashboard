// FormFactory.tsx
import React from 'react';
import FormInputText from './Form/Types/FormInputText';
import FormInputRadio from './Form/Types/FormInputRadio';

interface FormFactoryProps {
  field: any;
  control: any;
}

export const FormFactory: React.FC<FormFactoryProps> = ({ field, control }) => {
  const { componentType, ...fieldProps } = field;

  const renderFieldComponent = () => {
    switch (componentType) {
      case 'text':
        return <FormInputText control={control} {...fieldProps} />;
      case 'radio':
        return <FormInputRadio control={control} {...fieldProps} />;
      default:
        return null;
    }
  };

  return <div className={`p-2 ${field.grid}`}>{renderFieldComponent()}</div>;
};
