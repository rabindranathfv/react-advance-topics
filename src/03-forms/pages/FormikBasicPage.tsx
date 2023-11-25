import { useFormik } from "formik";
import * as Yup from "yup";

import "../../styles/styles.css";

export const FormikBasicPage = () => {
  const { values, handleReset, handleSubmit, errors, getFieldProps, touched } =
    useFormik({
      initialValues: { firstName: "", lastName: "", email: "" },
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
        email: Yup.string()
          .email("this format it's not for a email")
          .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "this format it's not for a email"
          )
          .required(),
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
          id="firstName"
          // name="firstName"
          // onBlur={handleBlur}
          // onChange={handleChange}
          // value={values.firstName}
          {...getFieldProps("firstName")}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="LastName">LastName</label>
        <input
          type="text"
          id="LastName"
          // name="lastName"
          // onBlur={handleBlur}
          // onChange={handleChange}
          // value={values.lastName}
          {...getFieldProps("lastName")}
        />

        {touched.lastName && errors.lastName && <span> {errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          // name="email"
          // onBlur={handleBlur}
          // onChange={handleChange}
          // value={values.email}
          {...getFieldProps("email")}
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
