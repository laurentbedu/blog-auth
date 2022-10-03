import { useState } from "react";


function LoginScreen() {

    const [valid, setValid] = useState({email:false, password:false})
    const validForm = (jsonData) => {
        const isValid = {email:false, password:false}
        const emailInput = document.getElementById("email-input");
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(emailPattern.test(emailInput.value)){
            isValid.email = true;
        }
        const passwordInput = document.getElementById("password-input");
        const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
        if(passwordPattern.test(passwordInput.value)){
            isValid.password = true;
        }
        setValid(isValid);
        return isValid.email === true && isValid.password === true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonData = Object.fromEntries(formData.entries()); 
        console.log(jsonData);
        if(!validForm(jsonData)){
            return;
        }
        fetch('http://blog.api/auth/login', {
            method: "POST",
            body: JSON.stringify(jsonData)
        }).then(resp => resp.json())
        .then(json => {
            console.log(json);
        })
    }

  return (
    <>
      <h1>LoginScreen</h1>
      <form className="w-50" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">
            Email address <i className={"text-danger" + (valid.email ? " d-none":"")}>*</i>
          </label>
          <input 
            type="email" name="login"
            className="form-control"
            id="email-input"
          />
          <i className={"text-danger" + (valid.email ? " d-none":"")}>* must be a valid email address</i>
        </div>
        <div className="mb-3">
          <label htmlFor="password-input" className="form-label">
            Password <i className={"text-danger" + (valid.password ? " d-none":"")}>*</i>
          </label>
          <input
            type="password" name="password"
            className="form-control"
            id="password-input"
          />
          <i className={"text-danger" + (valid.password ? " d-none":"")}>* 6 characters including a capital letter</i>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default LoginScreen;
