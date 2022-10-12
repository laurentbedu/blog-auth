import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterScreen() {
  
  const {register, handleSubmit, formState: { errors } } = useForm();
  
  const formInvalid = () => console.log("Errors", errors);

  const formSubmit = (data) => console.log("Validated Data", data);
  
  return (
    <>
      <h1>Register</h1>
      <form noValidate className="w-50"
            onSubmit={handleSubmit(formSubmit, formInvalid)}>
        <div className="mb-3">
          <label htmlFor="pseudo-input" className="form-label">
            Pseudo <i className={"text-danger"}>{errors.pseudo ? " *" : " " }</i>
          </label>
          <input id="pseudo-input" type="text" placeholder="pseudo"
                {...register("pseudo", { required: true, minLength: 3 })} />
          <i className={"text-danger d-block"}>{errors.pseudo ? "* at least 3 chars" : " " }</i>
        </div>

        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">
            Email <i className={"text-danger"}>{errors.email ? " *" : " " }</i>
          </label>
          <input id="email-input" type="email" placeholder="email"
                {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
          <i className={"text-danger d-block"}>{errors.email ? "* must be a valid email address" : " " }</i>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
