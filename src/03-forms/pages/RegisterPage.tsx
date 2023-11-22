import { FormEvent } from "react";
import "../../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    onChange,
    formData,
    email,
    name,
    password,
    confirmPassword,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("DATA ON SUBMIT", formData);
  };

  // const isValidEmail = (email: string) => {
  //   const re =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // };

  // if (!values.email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }
  return (
    <div>
      <h1>RegisterPage</h1>

      <form noValidate onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={onChange}
          placeholder="Name"
          className={`${name.trim().length <= 0}` && "has-error"}
        />
        {name.trim().length <= 0 && <span>este campo es requerido</span>}

        <input
          type="email"
          value={email}
          name="email"
          onChange={onChange}
          placeholder="Email"
          className="has-error"
        />

        {name.trim().length <= 0 && <span>este campo es requerido</span>}

        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          placeholder="Password"
          className="has-error"
        />

        {name.trim().length <= 0 && <span>este campo es requerido</span>}
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          placeholder="R epeat password"
          onChange={onChange}
          className="has-error"
        />

        {name.trim().length <= 0 && <span>este campo es requerido</span>}

        <button type="submit">create</button>
        <button type="button" onClick={resetForm}>
          Reset form
        </button>
      </form>
    </div>
  );
};
