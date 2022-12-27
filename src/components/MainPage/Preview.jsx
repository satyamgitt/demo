import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { AiTwotoneDelete } from "@react-icons/all-files/ai/AiTwotoneDelete";
// import { Card, DropdownButton, Dropdown, Modal, Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { useParams, } from 'react-router';
// import logo from '../../../';
import { Link, useNavigate } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import { useTheme } from '@mui/material/styles';
import { Formik, Form, Field, FieldArray } from 'formik';
import { locationList } from './Homeconfigration/HomeConfigure';
import "./Preview.scss"
// import { useMediaQuery } from '@material-ui/core';

// import Update from './Update';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const switchList = [
    { name: 'select-switch', code: '' },
    { name: 'Fan', code: 'Fan' },
    { name: 'Light', code: 'Light' },
    { name: 'Socket', code: 'Socket' },
    { name: 'N/A', code: 'N/A' }
]


var emailstore;
var edit;

const Preview = () => {
    const [data, setData] = useState([])
   

    const [show, setShow] = useState(false);



    const [output, setOutput] = useState([])

   
    

    console.log("junk array", output);
    //   const [emailstore, setEmail] = useState([]);


    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const navigateTo = useNavigate();




    // let history = useHistory();
    let { email } = useParams();
   
    var mail = email
  




    useEffect(() => {
        emailstore = JSON.parse(localStorage.getItem('items'));
        console.log("Emailcheck", emailstore);
        fetchData();

    }, [])

    const previous = () => {
        // history.push('/reqdetails/' +email)
        navigateTo('/reqestdetails')
    }


    const fetchData = () => {
        var payload = [{ "email": emailstore }]
        console.log("payload sending as user email for update in list", payload);
        axios.post('http://3.128.231.248/i-switch/automation/show_details.php', payload)
            .then((response) => {
                setData(response.data)
                console.log("API-RESPONSE  LIST FOR USER EMAIL", response.data);
                // console.log("uigfj" , data);
            })
    }

    // const handelEdit = (x)=>{
    //     const temp = [...data]
    //     const payload = temp[x];
    //     edit = payload
    //     EditFun(x)
    // }

    const handleSubmit = (values) => {




        // console.log("user data through formik ", values);
        if (values != null) {
            // putting email value in emailstore 
            values['email'] = emailstore;
            var data = []
            data.push(values)
            // console.log("REQDETAILS", JSON.stringify(data));
            axios.post(`http://3.128.231.248/i-switch/automation/user_requirements.php`, data)
                .then(res => {
                    console.log("on submit user response equilng with server", res.data);
                    if (res.data === "1") {
                        alert("Data added successfully");
                        navigateTo('/Preview')
                    }
                    else {
                        alert('something went Wrong!!');
                    }
                })

                .catch((error) => {
                    console.log("Error", error);
                })
        }
    }

    function deleteFun(x) {
        // x==>index
        console.log(x);
        const temp = [...data]
        const payload = temp[x];
        payload['email'] = emailstore
        const junk = [];
        junk.push(payload);
        axios.post(`http://3.128.231.248/i-switch/automation/delete_details.php`, junk)
            .then((res) => {
                fetchData()
            })

    }


    
    // function EditFun(x) {
        // const temp = [...data]
        // console.log("all user data in temp", temp);
        // const payload = temp[x];
        // console.log("payload comming from temp array as a object of given index", payload);

        // payload['email'] = mail

        // const junk = [];
        // junk.push(payload);

        // edit = junk
        // console.log("edit", edit);

        // setShow(true)
        // setOutput(junk);

        // console.log( "abc" , output)
        // axios.post(`http://3.128.231.248/i-switch/automation/editFlatDetails.php`, junk)
        //     .then((res) => {

        //         console.log(output);

        //     })


    // }

    const submitdata = () => {
        var x = [{ "email": emailstore }]
        // console.log("array of user email after submitting", x);
        axios.post(`https://3.128.231.248/i-switch/automation/send_ack.php`, x)
            .then(res => {
                if (res.data != "0") {
                    // console.log(mail);
                    navigateTo('/userdetails')?
                    navigateTo('/success'):<div> </div>
                }
                else {
                    alert("Something went wrong");
                }
            })

    }

    //model handling function

    // console.log(output);
    // const Dd1handle = (e) => {
    //     setOutput(e);
    // }

    const handleLogout = () => {
        console.log("history data")
        // history.push("/");
    }



    return (
        <>
            <div className='rcorners2'>
                <center>

                    <div className='cardbody'>
                        {/* <img src={logo} alt=" " width='100' height='100'></img> */}
                    </div>

                    <div>

                        {/* <Button type="button" style={{ float: 'right', marginBottom: '10px' }} onClick={() => handleLogout()}>Logout</Button> */}


                    </div>

                    {data ?

                        (

                            <>

                                <div style={{ width: '100%', height: '100%' }}>
                                    <Link to="/HomeConfigure" className='add_moreData' >
                                        <button type="submit" onClick={() => previous()} style={{ float: 'left' }}>Add More</button>
                                    </Link>
                                    <TableContainer component={Paper}>
                                        <Table stickyHeader aria-label="sticky table">

                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={{ fontSize: '15pt' }}>Location</TableCell>
                                                    <TableCell style={{ fontSize: '15pt' }}>Sub-Location</TableCell>
                                                    <TableCell style={{ fontSize: '15pt' }}>Switch-Board-ID</TableCell>
                                                    <TableCell style={{ fontSize: '15pt' }}>SW-1</TableCell>
                                                    <TableCell style={{ fontSize: '15pt' }}>SW-2</TableCell>
                                                    <TableCell style={{ fontSize: '15pt' }}>SW-3</TableCell>
                                                    <TableCell style={{ fontSize: '15pt' }}>SW-4</TableCell>
                                                    <TableCell style={{ fontSize: '15pt' }}>SW-5</TableCell>
                                                    {/* <TableCell style={{ fontSize: '15pt' }}>Edit</TableCell> */}
                                                    <TableCell style={{ fontSize: '15pt' }}>Delete</TableCell>
                                                </TableRow>
                                            </TableHead>


                                            <TableBody>
                                                {
                                                    data.map((d, i) => {
                                                        return (
                                                            <TableRow key={i}>
                                                                <TableCell style={{ fontSize: '10pt' }}>{d.location}</TableCell>
                                                                <TableCell style={{ fontSize: '10pt' }}>{d.subLocation}</TableCell>
                                                                <TableCell style={{ fontSize: '10pt' }}>{i + 1}</TableCell>
                                                                <TableCell style={{ fontSize: '10pt' }}>{d.sw1}</TableCell>
                                                                <TableCell style={{ fontSize: '10pt' }}>{d.sw2}</TableCell>
                                                                <TableCell style={{ fontSize: '10pt' }}>{d.sw3}</TableCell>
                                                                <TableCell style={{ fontSize: '10pt' }}>{d.sw4}</TableCell>
                                                                <TableCell style={{ fontSize: '10pt' }}>{d.sw5}</TableCell>
                                                                {/* <Link to="/update"> */}
                                                                {/* <TableCell style={{ fontSize: '10pt', cursor: "pointer" }} onClick={() => EditFun(i)}> <FaEdit /> </TableCell> */}
                                                                {/* </Link> */}
                                                                <TableCell style={{ fontSize: '10pt', cursor: "pointer" }} onClick={() => deleteFun(i)}><AiTwotoneDelete /></TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>

                                        </Table>
                                    </TableContainer>
                                </div>












                                <div className='final_submit'>
                                    <button type="submit" onClick={() => submitdata()}>Submit</button>
                                </div>



                            </>)
                        :


                        (
                            <>
                                <div className='cart_Empty'>Your Cart is Empty Please select Your Home Information</div>

                                <Link to="/HomeConfigure" className='final_submit'>

                                    <button  onClick={() => previous()}>Add More</button>
                                </Link>
                            </>

                        )


                    };


                </center>
            </div>
        </>
    );
}

export default Preview;






















// previously made model for edit button
// {
//     show ? <div>

//         <Button onClick={() => setShow(true)}>Open modal</Button>
//         <Modal
//             open={show}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//         >
//             <Box sx={style}>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                     {
//                         edit.location
//                     }
//                 </Typography>
//                 <Typography id="modal-modal-description" sx={{ mt: 2 }}>


//                     <Typography>Heloo {edit.location}</Typography>

//                     {/* <Formik
//                     initialValues={{ edit }}


//                     onSubmit={(values) => {
//                         console.log("user input values", values)
//                         handleSubmit(values)
//                     }}>


//                     {({ values }) => (

//                         <>

//                             <Form >




//                                 <FieldArray>
//                                     <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                                         <p>Enter Your Flat/House Details</p>
//                                         <Field name={`location`} as="select" >
//                                             {locationList.map(location => (
//                                                 <option value={location.code}>{location.name}</option>
//                                             ))}</Field>
//                                     </div>
//                                 </FieldArray>
//                                 <hr />





//                             </Form>

//                         </>
//                     )}
//                 </Formik> */}











//                 </Typography>
//             </Box>
//         </Modal>

//     </div> : <div> </div>
// }