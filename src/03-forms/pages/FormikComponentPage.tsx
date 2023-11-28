import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../../styles/styles.css";

export const FormikComponentsPage = () => {
  return (
    <div>
      <h1> Formik HOC and Formik Components </h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(
            "🚀 ~ file: FormikComponentPage.tsx:31 ~ FormikComponentsPage ~ values:",
            values
          );
        }}
        validationSchema={Yup.object({
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
          terms: Yup.boolean().oneOf(
            [true],
            "should accept terms and conditions"
          ),
          jobType: Yup.string()
            .notOneOf(["it-junior"], "this options it is forbidden")
            .required(),
        })}
      >
        {({ handleReset, values }) => (
          <Form noValidate>
            <label htmlFor="firstName">FirstName</label>

            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="LastName">LastName</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="design">Design</option>
              <option value="it-senior">It Senior</option>
              <option value="it-junior">It Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            {<code>{JSON.stringify(values, null, 2)}</code>}

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Clear
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
