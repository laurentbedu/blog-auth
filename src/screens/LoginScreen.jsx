function LoginScreen() {

    

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonData = Object.fromEntries(formData.entries()); 
        console.log(jsonData);
        


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
          <label for="email-input" className="form-label">
            Email address 
          </label>
          <input 
            type="email" name="login"
            className="form-control"
            id="email-input"
          />
          
        </div>
        <div className="mb-3">
          <label for="password-input" className="form-label">
            Password 
          </label>
          <input
            type="password" name="password"
            className="form-control"
            id="password-input"
          />
          
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default LoginScreen;
