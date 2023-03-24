import React, { useState, useReducer } from "react";

import axios from "axios";


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}
export const FormSignIn = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    axios.post('https://back-cuestionario.onrender.com/auth/log-in', {
      user: formData.user,
      password: formData.password
    })
    .then(response => {
      
      setSubmitting(false);
      if (!response.data.error) {
        window.location.href = '/quest';
      }
    });
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  return (
    <div className="col-lg-5 my-auto pb-4 mbr-form" data-form-type="formoid">
      <form
        onSubmit={handleSubmit}
        className="mbr-form form-with-styler"
      >
        <div className="dragArea form-row">
          <div className="col-lg-12 align-center">
            <img className="mb-4" src={"assets/v1/img/icon.png"} alt="Logo SignIn" />
            <h1 className="h3 mb-3 fw-normal">Por favor, Inicie sesion</h1>
          </div>
          <div className="col-lg-12 form-group" data-for="Full Name">
            <input
              type="text"
              name="user"
              placeholder="User"
              data-form-field="Name"
              required="required"
              className="form-control display-7"
              id="Name-header3-1"
              onChange={handleChange}
            />
          </div>
          <div data-for="password" className="col-lg-12 form-group">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Contraseña"
              data-form-field="password"
              className="form-control display-7"
              required="required"
              id="Email-header3-1"
            />
          </div>
          <div className="col-auto form-btn">
            <button
              type="submit"
              className="btn btn-danger link-btn display-7"
            >
              ENTRAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}