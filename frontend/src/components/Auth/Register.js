import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css';
import { toast } from 'react-toastify';
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/routes/register', userData).then((res) => {
      toast.success("User Added Successfully");
      navigate('/login')
    }).catch((err) => {
      toast.error(err.response.data.message);
    })
  }
  return (
    <div className='register-main'>
        <div className="register-center-component">
            <div className="register-header">
              <h1 className="register-heading">Register</h1>
            </div>
            <div className="register-form-data">
              <span className="label">Name: </span><input type="text" onChange={(e) => setUserData((prev) => ({...prev, name: e.target.value}))} className="input" /><br />
              <span className="label">Email: </span><input type="email" onChange={(e) => setUserData((prev) => ({...prev, email: e.target.value}))} className="input" /><br />
              <span className="label">Password: </span><input type="password" onChange={(e) => setUserData((prev) => ({...prev, password: e.target.value}))} className="input" /><br />
            </div>
            <div className="register-button">
              <button className="register-btn" onClick={handleSubmit}>Login</button>
            </div>
            <div className="register-option">
              <p className="option">Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register
