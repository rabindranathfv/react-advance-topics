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

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData,
    formData,
    setFormData,
    onChange,
    resetForm,
    isValidEmail,
  };
};
