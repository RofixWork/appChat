import React, {useContext} from "react";
import { Field, Form, Formik } from "formik";
import { Context } from "../Global/Context";

const Login = () => {
    const {login, closeModel} = useContext(Context)
  const initValues = {
    email: "",
    password: "",
  };
  const userLogin = (values) => {
    login(values)
    closeModel();
  };

  return (
    <>
      <Formik initialValues={initValues} onSubmit={userLogin}>
        <Form>
          <div className="mb-3">
            <Field
              className="form-control shadow-none"
              placeholder="Enter Your Email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-3">
            <Field
              className="form-control shadow-none"
              placeholder="Enter Your Password"
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="btn-website2 mb-1 w-100">
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
