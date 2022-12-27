import React, { useState } from 'react';
import "./Register.scss"
import Validation from './Validation';
import { NavLink, } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const navigateTo = useNavigate();

    const handleChange = (event) => {
        setData(
            { ...data, [event.target.name]: event.target.value, }
        );
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(data));
        const payload = [];
        payload.push(data)
        console.log("Email and password", payload);

        axios.post('https://3.128.231.248/i-switch/automation/Customer_Login.php', payload)
            .then((response) => {
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else if (response.data === "Login Successful") {
                    // props.history.push("/service")
                    localStorage.setItem('items', JSON.stringify(data.email));
                    navigateTo('/HomeConfigure')
                    alert("Successfuly Login")
                } else {
                    alert('Login Error')
                }
                console.log("response data", response.data);
            })
            .catch((error) => {
                console.log("Error data");
            })

        // const { email, password } = { ...data };
        // console.log("wwwwww", email, password);



    }



    return (
        <div className='login_container'>
            <div className='app-wrapper'>
                <div>
                    <p className='title'>Login Account,</p>
                    <form className='form-wrapper'>
                        <div className='email'>
                            <label className='label'>Enter Email</label>
                            <input className='input' type="text" name="email" value={data.email} onChange={handleChange} />
                            {errors.email && <p className='error'>{errors.email}</p>}
                        </div>
                        <div className='password'>
                            <label className='name'>Password</label>
                            <input className='input' type="password" name="password" value={data.password} onChange={handleChange} />
                            {errors.password && <p className='error'>{errors.password}</p>}
                        </div>
                        <div className='Log_in'>
                            <button  className='submit' onClick={handleSubmit}>Log in</button>
                        </div>
                    </form>
                </div>
                <div className='Creat_center'>
                    <NavLink to="/Register" >Create New Account</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Login;