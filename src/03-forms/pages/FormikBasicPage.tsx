import { useFormik } from "formik";
import * as Yup from "yup";

import "../../styles/styles.css";

export const FormikBasicPage = () => {
  const {
    handleChange,
    values,
    handleReset,
    handleSubmit,
    handleBlur,
    errors,

    touched,
  } = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", password: "" },
    onSubmit: (values) => {
      console.log(
        "🚀 ~ file: FormikBasicPage.tsx:9 ~ FormikBasicPage ~ values:",
        values
      );
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "should have 15 characters oor less")
        .required(),
      lastName: Yup.string().required(),
      email: Yup.string().email("this format it's not for a email").required(),
    }),
  });

  console.log(
    "🚀 ~ file: FormikBasicPage.tsx:14 ~ FormikBasicPage ~ errors:",
    errors
  );
  return (
    <div>
      <h1> Formik Basic Tutorial </h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onBlur={handleBlur}
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
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />

        {touched.lastName && errors.lastName && <span> {errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onBlur={handleBlur}
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
