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
    isValidEmail,
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
          className={`${!isValidEmail(email) && " has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          placeholder="Password"
          className="has-error"
        />
        {password.trim().length <= 0 && <span>este campo es requerido</span>}
        {password.trim().length > 0 && password.trim().length <= 6 && (
          <span>este tiene menos de 6 caracteres</span>
        )}
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          placeholder="R epeat password"
          onChange={onChange}
          className="has-error"
        />
        {confirmPassword.trim().length <= 0 && (
          <span>este campo es requerido</span>
        )}
        {confirmPassword.trim().length > 0 &&
          confirmPassword.trim().toLocaleLowerCase() !==
            password.trim().toLocaleLowerCase() && (
            <span>las contrase;as no coinciden</span>
          )}
        <br />
        <code>{JSON.stringify(formData, null, 2)}</code>
        <button type="submit">create</button>
        <button type="button" onClick={resetForm}>
          Reset form
        </button>
      </form>
    </div>
  );
};
