import React, { useState } from "react";
import { useForm } from "react-hook-form";
import doFetch from "../helpers/fetchHelper";

export default function RegisterScreen() {
  
  const {register, handleSubmit, formState: { errors } } = useForm();
  
  const formInvalid = (errors) => console.log("Errors", errors);

  const [msg, setMsg] = useState("");
  const formSubmit = async (formData) => {

    const {data} = await doFetch("auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log(data)
    setMsg(data.message)
  }
  
  return (
    <>
      <h1>Register</h1>
      <form noValidate className="w-50"
            onSubmit={handleSubmit(formSubmit, formInvalid)}>
        <div className="mb-3">
          <label htmlFor="pseudo-input" className="form-label">
            Pseudo <i className={"text-danger"}>{errors.pseudo ? " *" : " " }</i>
          </label>
          <input id="pseudo-input" type="text" placeholder="pseudo" className="form-control"
                {...register("pseudo", { required: true, minLength: 3 })} />
          <i className={"text-danger d-block"}>{errors.pseudo ? "* at least 3 chars" : " " }</i>
        </div>

        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">
            Email <i className={"text-danger"}>{errors.email ? " *" : " " }</i>
          </label>
          <input id="email-input" type="email" placeholder="email" className="form-control"
                {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
          <i className={"text-danger d-block"}>{errors.email ? "* must be a valid email address" : " " }</i>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="text-primary">{msg}</div>
    </>
  );
}
