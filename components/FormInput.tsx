import React, { Dispatch, SetStateAction } from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type = 'text', onChange }) => (
  <div className="flex flex-col mb-2">
    <label htmlFor={name}>{label}</label>
    <input
      className="border-[0.15vw] p-1"
      type={type}
      name={name}
      id={name}
      onChange={onChange}
    />
  </div>
);

export default FormInput;
