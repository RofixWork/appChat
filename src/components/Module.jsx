import React,{useState, useContext} from 'react'
import Login from '../sign/Login'
import Register from '../sign/Register'
import {Context} from '../Global/Context';
const Module = () => {
  const { model, closeModel } = useContext(Context);
  const [forms, setForms] = useState({
    register: true,
    login: false,
  });

  //destructuring
  const { register, login } = forms;

  //toggle Forms
  const toggleForms = () => {
    setForms({
      ...forms,
      register: !register,
      login: !login,
    });
  };

  //closeModel
  const closeModule = () => closeModel();

  //stopPropagation
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <>
      {model ? (
        <div
          className="module d-flex justify-content-center align-items-center"
          onClick={closeModule}
        >
          <div
            className="w-50 bg-white p-3 rounded-sm shadow"
            onClick={stopPropagation}
          >
            {register ? <Register /> : <Login />}
            <span
              onClick={toggleForms}
              className="mb-0 text-muted"
              style={{ cursor: "pointer", fontSize: "14px" }}
            >
                {register ? 'Already have an account?' : 'Create a new account.'}
              
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Module
