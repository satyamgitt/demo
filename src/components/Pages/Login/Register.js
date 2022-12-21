import React, { useState } from 'react';
import "./Register.scss"
import Validation from './Validation';
import { NavLink, } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






const Register = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [flag, setFlag] = useState(false);

    const navigateTo = useNavigate();


    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(data));
        const send = [];
        send.push(data);
        // console.log("payload", send);
        axios.post('http://3.128.231.248/i-switch/automation/Customer_Registration.php', send)
            .then((response) => {
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                    // console.log(response.data.message);
                } else if (response.data == 'Registration Successful') {
                    alert("Successfuly Register");
                    navigateTo('/Login')
                } else {
                    alert(response.data)
                }
            })
            .catch((error) => {
                console.log("Error data");
            })

    }

    return (
        <div className='regester_container'>
            <div className='app-wrapper'>
                <div>
                    <p className='title'>Create Account</p>
                    <form className='form-wrapper'>
                        <div className='name'>
                            <label className='name'>Enter Name</label>
                            <input className='input' type="text" name="name" value={data.name} onChange={handleChange} />
                            {errors.name && <p className='error'>{errors.name}</p>}
                        </div>
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
                        <div className='sign_up'>
                            <button className='submit' onClick={handleSubmit}>Sign Up</button>
                        </div>
                        <div style={{ marginTop: '60px', fontSize: '14px' }}>
                            <NavLink to="/Login"> Already Register please Login </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Register;