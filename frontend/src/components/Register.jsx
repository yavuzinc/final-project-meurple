import React, { useState } from "react";
import Axios from 'axios';


function Register() {
	const [nameReg, setNameReg] = useState('');
	const [emailReg, setEmailReg] = useState('');
	const [passwordReg, setPasswordReg] = useState('');

	const registration = ()=>{
		Axios.post('http://localhost:3001/register',{
			name: nameReg,
			email: emailReg,
			password: passwordReg
		}).then((response)=>{
			console.log(response);
		})
	}
  return (
		  <div className="registration">
				<h1>Registration</h1>
				<label>Name</label>
				<input type="text" onChange={(e)=>{
					setNameReg(e.target.value)
				}} 
					/>
				<label>Email</label>
				<input type="email" onChange={(e)=>{
					setEmailReg(e.target.value)
				}} 
					/>
				<label>Password</label>
				<input type="password" onChange={(e)=>{
					setPasswordReg(e.target.value)
				}} 
					/>
				<button onClick={registration}>Register</button>
		 </div>
  );
};

export default Register;