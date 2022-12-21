import React, { useState } from 'react';
// import "../Login/Register.scss"
import Validation from '../Login/Validation';
import { NavLink, } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./UserInfo.scss"





const Details = () => {

    const [data, setData] = useState({
        person_name: "",
        email: "",
        phone: "",
        site_name: "",
        tower_name: "",
        floor: "",
        flat: "",
    });

    const [errors, setErrors] = useState({});
    // console.log(errors);
    const navigateTo = useNavigate();


    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(data);
        const send = [];
        send.push(data);
        console.log("Userdetailspayload", send);
        axios.post('http://3.128.231.248/i-switch/automation/customer_details.php', send)
            .then((response) => {
                // console.log(response);
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    // props.history.push("/service")
                    alert(response.data);
                    navigateTo('/success')
                }
                console.log("response data", response.data);
            })
            .catch((error) => {
            //     console.log("Error data");
            })

    }

    return (
        <div className='user_container'>
            <div className='user_app-wrapper'>
                <div>
                    <p className='title'>Enter Your Details</p>
                    <form className='user_form-wrapper'>
                        <div className='name'>
                            <label className='name'>Enter Name</label>
                            <input className='input' type="text" name="person_name" value={data.person_name} onChange={handleChange} />
                            {/* {errors.name && <p className='error'>{errors.name}</p>} */}
                            {errors.person_name ? "" : <p className='error' >Name is required</p>}
                        </div>
                        <div className='name'>
                            <label className='name'>Email</label>
                            <input className='input' type="text" name="email" value={data.email} onChange={handleChange} />
                            {/* {errors.name && <p className='error'>{errors.name}</p>} */}
                            {errors.email ? "" : <p className='error' >Email is required</p>}
                        </div>
                        <div className='name'>
                            <label className='label'>Phone</label>
                            <input className='input' type="number" name="phone" value={data.phone} onChange={handleChange} />
                            {/* {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                             {errors.phone ? "" : <p className='error' >Number is required</p>} 
                        </div>
                        <div className='name'>
                            <label className='name'>Site-Name</label>
                            <input className='input' type="text" name="site_name" value={data.site_name} onChange={handleChange} />
                            {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                            {errors.site_name ? "" : <p className='error' >site_name is required</p>} 
                        </div>
                        <div className='name'>
                            <label className='name'>Tower-Name</label>
                            <input className='input' type="text" name="tower_name" value={data.tower_name} onChange={handleChange} />
                            {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                            {errors.tower_name ? "" : <p className='error' >tower_name is required</p>} 
                        </div>
                        <div className='name'>
                            <label className='name'>Floor</label>
                            <input className='input' type="text" name="floor" value={data.floor} onChange={handleChange} />
                            {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                            {errors.floor ? "" : <p className='error' >Flore Name is required</p>} 
                        </div>
                        <div className='name'>
                            <label className='name'>Flat/House-no</label>
                            <input className='input' type="text" name="flat" value={data.flat} onChange={handleChange} />
                            {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                            {errors.flat ? "" : <p className='error' >Flat is required</p>} 
                        </div>
                        <div style={{display:'flex' , justifyContent:'center'}}>
                            <button className='user_submit' 
                              onClick={handleSubmit}>Submit</button>
                        </div>
                        {/* <div style={{ marginTop: '60px', fontSize: '14px' }}>
                            <NavLink to="/Login">Need to Skip?</NavLink>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Details;