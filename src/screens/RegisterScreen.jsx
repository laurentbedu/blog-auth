import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterScreen() {
  
  const {register, handleSubmit, formState: { errors } } = useForm();
  
  const formInvalid = () => console.log("Errors", errors);

  const formSubmit = (data) => console.log("Validated Data", data);
  
  return (
    <>
      <h1>Register</h1>
    </>
  );
}
