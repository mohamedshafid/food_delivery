import React, { useContext, useState } from 'react';
import { faArrowRight,faXmark } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Login.css"
import { ShowContext } from '../../Context/ShowContext';
import axios from "axios";
import { toast } from "react-toastify";
const Login = ({ setAuthen }) => {
  
  const { url_api,setToken } = useContext(ShowContext);

  const [show, setShow] = useState("signup");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name;
    let url_append = url_api;
    if (name == "signup")
    {
      url_append += "/user/register";
    }
    else {
      url_append += "/user/login";

    }

    const response = await axios.post(url_append, data);
    console.log(response.data);

    if (response.data.status == "true")
    {
      toast.success("You are Logged In");  
      localStorage.setItem("user", response.data.token);
      setToken(response.data.token);
      setAuthen(false);
    }
    else {
      console.log("Error from the backend", response.data.message);
      toast.error("Invalid Credentials");
    }
  }


 
  return (
    <div className="authen">
      <div className="authen-container">
        <FontAwesomeIcon icon={faXmark} className="right-arrow" onClick={()=>setAuthen(false)} />
        {
          show === "signup" ?
          <div className="authen-signup">
          <form className="signup" onSubmit={handleSubmit} name="signup">
              <h1>Signup</h1>
                <input type="text" placeholder="UserName:" required name="username" onChange={handleChange} />
              <input type="email" placeholder="Email:" required name="email" onChange={handleChange}/>
                <input type="password" placeholder="Password:" required name="password" onChange={handleChange} />
              <button type="submit" >{show === "signup" ? "create account" : "login"}</button>
                
              
          </form>
              <p>
                  Already having an account?
                  <span onClick={() => setShow("login")}> Click Here</span>
              </p>
            </div>
            :
          <div className="authen-login">
          <form onSubmit={handleSubmit} name="login">
              <h1>Login</h1> 
              <input type="text" placeholder="Email:" required onChange={handleChange} name="email"/>
                <input type="password" placeholder="Password:" required onChange={handleChange} name="password" />
              <button type="submit">Login</button>
                
          </form>  
              <p>
               create a new account?
               <span onClick={() => setShow("signup")}>  Click Here</span>
          </p>
          </div>
        }  
      </div>
    </div>
  )
}

export default Login;
