import { Formik, Form } from "formik";

import formJson from "../data/custom-form.json";

import { TextInputAbs } from "../components";

export const DynamicForm = () => {
  console.log("🚀 ~ file: DynamicForm.tsx:8 ~ formJson:", formJson);
  return (
    <div>
      <h1>DynamicForm</h1>

      <h3>Build dynamic </h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values) => {
          console.log(
            "🚀 ~ file: DynamicForm.tsx:13 ~ DynamicForm ~ values:",
            values
          );
        }}
      >
        {(formik) => {
          return (
            <Form>
              {formJson.map(({ type, name, placeholder, label }) => {
                return (
                  <TextInputAbs
                    key={name}
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              })}

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
