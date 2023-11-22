import { ChangeEvent, useState } from "react";

export const useForm = <T>(initFormState: T) => {
  const [formData, setFormData] = useState(initFormState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const data = event.target.value;
    setFormData((state) => ({
      ...state,
      [key]: data,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initFormState });
  };

  return { ...formData, formData, setFormData, onChange, resetForm };
};
