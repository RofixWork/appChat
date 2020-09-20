import React, {useContext} from 'react'
import {Field, Form, Formik} from 'formik';
import { Context } from '../Global/Context';

const Register = () => {
    const {register, closeModel} = useContext(Context);
    const initValues = {
        username:'' ,email: '', password: ''
    }
    const userRegister = values => {
        register(values);
        closeModel();
    }
    
    return (
      <>
        <Formik initialValues={initValues} onSubmit={userRegister}>
          <Form>
            <div className="mb-3">
              <Field
                className="form-control shadow-none"
                placeholder="Enter Your Username"
                name="username"
                type="text"
                required
              />
            </div>
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
              Register
            </button>
          </Form>
        </Formik>
      </>
    );
}

export default Register
