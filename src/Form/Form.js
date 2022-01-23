import React from "react";
import { useFormik } from "formik";
import "../Form/Form.css";

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      area: "",
      issues: "",
      suggestions: "",
    },
    onSubmit: (values) => {
      values.preventDefault();
      console.log(`Form data`, values);
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.area) {
        errors.area = "Required";
      }

      if (!values.issues) {
        errors.issues = "Required";
      }
      if (!values.suggestions) {
        errors.suggestions = "Required";
      }

      return errors;
    },
  });
  console.log("Form Details :", formik.values);
  return (
    <div className="formMainContainer">
      <form onSubmit={formik.handleSubmit} className="formContent">
        <div className="form-control">
          {" "}
          <label>Name</label>
          <input
            onBlur={formik.handleBlur}
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label>Area</label>
          <input
            onBlur={formik.handleBlur}
            type="area"
            name="area"
            id="area"
            onChange={formik.handleChange}
            value={formik.values.area}
          />
          {formik.touched.area && formik.errors.area ? (
            <div className="error">{formik.errors.area}</div>
          ) : null}
        </div>

        <div className="form-control">
          {" "}
          <label>Issues</label>
          <textarea
            onBlur={formik.handleBlur}
            type="issues"
            name="issues"
            id="issues"
            onChange={formik.handleChange}
            value={formik.values.issues}
          />
          {formik.touched.issues && formik.errors.issues ? (
            <div className="error">{formik.errors.issues}</div>
          ) : null}
        </div>

        <div className="form-control">
          {" "}
          <label>Suggestions</label>
          <textarea
            onBlur={formik.handleBlur}
            type="suggestions"
            name="suggestions"
            id="suggestions"
            onChange={formik.handleChange}
            value={formik.values.suggestions}
          />
          {formik.touched.suggestions && formik.errors.suggestions ? (
            <div className="error">{formik.errors.suggestions}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
