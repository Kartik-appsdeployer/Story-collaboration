import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../../app/userSlice/userSlice';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/routes/login', userData).then((res) => {
      toast.success(res.data.message)
      localStorage.setItem("Token", res.data.authToken)
      dispatch(setUser(res.data.data.user));
      navigate('/')
      // const data = localStorage.getItem("Token")
      // const ID = JSON.parse(window.atob(data.split('.')[1]))
      // console.log(ID.user.id)
      // fetch(data).then((res) => console.log(res)).catch((err) => console.log(err.message));
    }).catch((err) => {
      toast.error(err.response.data.error)
    })
  }
  return (
    <div className='login-main'>
      <div className="login-center-component">
        <div className="login-header">
          <h1 className="login-heading">Login</h1>
        </div>
        <div className="login-form-data">
          <span className="label">Email: </span><input type="email" autocomplete='off' onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))} className="input" /><br />
          <span className="label">Password: </span><input type="password" autocomplete='off' onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))} className="input" /><br />
        </div>
        <div className="login-button">
          <button className="login-btn" onClick={handleSubmit}>Login</button>
        </div>
        <div className="login-option">
          <p className="option">Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
