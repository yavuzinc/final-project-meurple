import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const signIn = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
			if(response.data.message){
				setLoginStatus(response.data.message)
			} else{
				setLoginStatus(response.data[0].email)
			}
    
    });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={signIn}>Login</button>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Login;
