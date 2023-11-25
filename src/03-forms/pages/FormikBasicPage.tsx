import { ErrorMessage, FormikErrors, useFormik } from "formik";

import "../../styles/styles.css";
import { error } from "console";

interface formValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const FormikBasicPage = () => {
  const validate = (values: formValues) => {
    const errors: FormikErrors<formValues> = {};
    return errors;
  };

  const { handleChange, values, handleReset, handleSubmit, errors, touched } =
    useFormik({
      initialValues: { firstName: "", lastName: "", email: "", password: "" },
      onSubmit: (values) => {
        console.log(
          "🚀 ~ file: FormikBasicPage.tsx:9 ~ FormikBasicPage ~ values:",
          values
        );
      },
      validate,
    });
  return (
    <div>
      <h1> Formik Basic Tutorial </h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleChange}
          value={values.firstName}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="LastName">LastName</label>
        <input
          type="text"
          name="lastName"
          id="LastName"
          onChange={handleChange}
          value={values.lastName}
        />

        {touched.lastName && errors.lastName && <span> {errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
        />

        {touched.email && errors.email && <span>{errors.email}</span>}

        {<code>{JSON.stringify(values, null, 2)}</code>}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Clear
        </button>
      </form>
    </div>
  );
};
