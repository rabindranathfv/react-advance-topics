import "../../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  const { values, handleReset, handleSubmit, errors, getFieldProps, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values) => {
        console.log(
          "🚀 ~ file: RegisterFormikPage.tsx:14 ~ RegisterFormikPage ~ values:",
          values
        );
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .min(2, "introduce at least 2 characters")
          .max(15, "maximum 15 characteres")
          .required(),
        email: Yup.string()
          .email("this format it's not for a email")
          .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "this format it's not for a email"
          )
          .required(),
        password: Yup.string().min(6).required(),
        confirmPassword: Yup.string()
          .min(6)
          .oneOf(
            [Yup.ref("password")],
            "password and confirm password should be the same"
          )
          .required(),
      }),
    });

  console.log(
    "🚀 ~ file: RegisterFormikPage.tsx:8 ~ RegisterFormikPage ~ errors:",
    errors
  );

  return (
    <div>
      <h1>Register Formik Page</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" {...getFieldProps("username")} />
        {touched.username && errors.username && <span>{errors.username}</span>}

        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>Email no es valido</span>}

        <input type="password" {...getFieldProps("password")} />
        {touched.password && errors.password && <span>{errors.password}</span>}

        <input type="password" {...getFieldProps("confirmPassword")} />
        {touched.confirmPassword && errors.confirmPassword && (
          <span>{errors.confirmPassword}</span>
        )}
        <br />
        <code>{JSON.stringify(values, null, 2)}</code>
        <button type="submit">create</button>
        <button type="button" onClick={handleReset}>
          Reset form
        </button>
      </form>
    </div>
  );
};
