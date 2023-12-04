import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../../styles/styles.css";
import { CheckboxAbs, SelectAbs, TextInputAbs } from "../components";

export const FormikAbstractPage = () => {
  return (
    <div>
      <h1> Formik Abstract </h1>

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
          <Form>
            <TextInputAbs
              label="FirstName"
              name="firstName"
              placeholder="please introduce firstName"
            />

            <TextInputAbs
              label="LastName"
              name="LastName"
              placeholder="please introduce LastName"
            />

            <TextInputAbs
              label="Email"
              name="email"
              placeholder="please introduce your Email"
              type="email"
            />

            <SelectAbs name="jobType" label="JobTitle">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="design">Design</option>
              <option value="it-senior">It Senior</option>
              <option value="it-junior">It Junior</option>
            </SelectAbs>

            <CheckboxAbs label="Terms and Condition" name="terms"></CheckboxAbs>

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
