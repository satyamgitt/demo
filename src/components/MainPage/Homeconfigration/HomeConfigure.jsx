import React, { Fragment, useEffect, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { useParams } from 'react-router';
import axios from 'axios';
import { Card, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
// import { IconName } from "react-icons/md";


import vi from "../../../assets/videobg.mp4";
import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import "../../MainPage/Success.scss"
import "../Homeconfigration/Bhk.scss"
import sbord from "../../../assets/switch.jpeg"
import cart from "../../../assets/cart.jpeg"


export const locationList = [
  { name: 'select location', code: '' },
  { name: 'Hall', code: 'Hall' },
  { name: 'Entrance', code: 'Entrance' },
  { name: 'Room1', code: 'Room1' },
  { name: 'Room2', code: 'Room2' },
  { name: 'Room3', code: 'Room3' },
  { name: 'Room4', code: 'Room4' },
  { name: 'Kitchen', code: 'Kitchen' },
  { name: 'Dining Area', code: 'Dining Area' },
  { name: 'Bathroom', code: 'Bathroom' },
  { name: 'Others', code: 'Others' },

  // { name: 'select location', code: '' },
  // { name: 'Production Area', code: 'Production Area' },
  // { name: 'Office Entrance', code: 'Office Entrance' },
  // { name: 'Administrative Area', code: 'Administrative Area' },
  // { name: 'Mechanical Department', code: 'Mechanical Department' },
  // { name: 'Panel Testing Area', code: 'Panel Testing Area' },
  // { name: 'Conference Room', code: 'Conference Room' },
  // { name: 'IT Department', code: 'IT Department' },
  // { name: 'I-Switch RND Area', code: 'I-Switch RND Area' },
  // { name: 'Fire-Ready RND Area', code: 'Fire-Ready RND Area' },
  // { name: 'Rest Room', code: 'Rest Room' },
  // { name: 'Storage Area', code: 'Storage Area' },
  // { name: 'Common Area', code: 'Comman Area' },
]



export const switchList = [
  { name: 'select-switch', code: '' },
  { name: 'Fan', code: 'Fan' },
  { name: 'Light', code: 'Light' },
  { name: 'Socket', code: 'Socket' },
  { name: 'N/A', code: 'N/A' }
]






const HomeConfigure = () => {
  const [One, setOne] = useState(false)
  const [Two, setTwo] = useState(false)
  const [Three, setThree] = useState(false)
  const [Four, setFour] = useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const navigateTo = useNavigate();

  const [emailstore, setEmail] = useState([]);

  const handleClickOpen1 = () => {
    setOne(true)
  }
  const handleClickClose1 = () => {
    setOne(false)
  }

  const handleClickOpen2 = () => {
    setTwo(true)
  }
  const handleClickClose2 = () => {
    setTwo(false)
  }
  const handleClickOpen3 = () => {
    setThree(true)
  }
  const handleClickClose3 = () => {
    setThree(false)
  }
  const handleClickOpen4 = () => {
    setFour(true)
  }
  const handleClickClose4 = () => {
    setFour(false)
  }

  const handelCart = () => {
    navigateTo("/Preview")
  }




  // useParams used for navigate different page without making other page
  // let { email } = useParams();

  // var mail = email




  // const handleLogout = () => {
  //   console.log("history data")
  //   // history.push("/");
  //   navigateTo('/Login ')
  // }



  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem('items')));
  }, []);







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

  // const [inputList, setInputList] = useState([]);

  // const onAddBtnClick = event => {
  //   // setInputList(inputList.concat());

  // };



  return (

    <>
      <div className='configrationPage'>


        <video src={vi} autoPlay loop muted ></video>


        <center>
          <img src={logo} alt="logo" ></img>
        </center>



        <div className="glow-on-hover cart">
          <Button variant="outlined" onClick={handelCart}>
            <img src={cart}  alt="" />
          </Button>
        </div>




        {/* <Homebtn
          handleClickOpen1={handleClickOpen1}
          handleClickOpen2={handleClickOpen2}
          handelCart={handelCart}

        /> */}

        <div className="mainBtn">




          <div className="glow-on-hover">
            <Button variant="outlined" onClick={handleClickOpen1}>
              1BHK
            </Button>
          </div>
          <div className="glow-on-hover">
            <Button variant="outlined" onClick={handleClickOpen2}>
              2BHK
            </Button>
          </div>
          <div className="glow-on-hover">
            <Button variant="outlined" onClick={handleClickOpen3}>
              3BHK
            </Button>
          </div>
          <div className="glow-on-hover">
            <Button variant="outlined" onClick={handleClickOpen4}>
              4BHK
            </Button>
          </div>



        </div>








        <div>
          {
            One ? <div>

              <Dialog
                fullScreen={fullScreen}
                open={One}
                onClose={handleClickClose1}
                aria-labelledby="responsive-dialog-title"
              >
                {/* <DialogTitle id="responsive-dialog-title">
                  {"Fill your Home Details"}
                </DialogTitle> */}
                <DialogContent>


                  <Formik
                    initialValues={{ switchboards: [], bathroom: [], balcony: [] }}


                    onSubmit={(values) => {
                      // console.log("user input values", values)
                      handleSubmit(values)
                    }}>


                    {({ values }) => (

                      <>

                        <Form >



                          <FieldArray>
                            <div className='form' >
                              <p>Enter Your Flat Details</p>
                              <Field name={`location`} as="select">
                                {locationList.map(location => (
                                  <option value={location.code}>{location.name}</option>
                                ))}</Field>
                            </div>
                          </FieldArray>
                          <hr />

                          <div className="main">



                            <FieldArray

                              name="switchboards"
                              render={arrayHelpers => (
                                // console.log("about fieldArray prop " , arrayHelpers)
                                <div className="form_data">
                                  <p> SELECT SWITCH BOARD </p>



                                  {values.switchboards && values.switchboards.length > 0 ?

                                    (
                                      values.switchboards.map((switchboard, index) => (

                                        <div key={index}>

                                          <Field name={`switchboards[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}> {location.name}</option>
                                            ))}</Field>

                                          <Field name={`switchboards[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}> {location.name}</option>
                                            ))}</Field>

                                          <Field name={`switchboards[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>

                                          <Field name={`switchboards[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>

                                          <Field name={`switchboards[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <br />
                                          <br />
                                          {/* removing the whole switch */}
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)}>
                                            Remove
                                          </button>
                                          {/* adding other switch */}
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    )

                                    :

                                    (
                                      <button className='glow-on-hover' style={{ color: 'black' }} type="button" onClick={() => arrayHelpers.push('')}>
                                        <img width={73} src={sbord} alt="" />
                                      </button>
                                    )}



                                </div>

                              )}

                            />


                            <FieldArray
                              name="balcony"
                              render={arrayHelpers => (
                                <div className='balcony_data'>
                                  <p>SELECT BALCONY SWITCHES</p>

                                  <div >
                                    {values.balcony && values.balcony.length > 0 ? (
                                      values.balcony.map((balcony, index) => (
                                        <div key={index}>
                                          <Field name={`balcony[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={balcony.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field><br />
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                          >
                                            Remove
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    ) : (
                                      <button className='glow-on-hover' style={{ color: 'black' }} type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all switchboards from the list */}
                                        <img width={73} src={sbord} alt="" />
                                      </button>
                                    )}
                                  </div>

                                </div>
                              )}
                            />





                            <FieldArray
                              name="bathroom"
                              render={arrayHelpers => (
                                <div className='bathroom_data'>
                                  <p> SELECT BATHROOM SWITCHES</p>
                                  {/* <Card style={{ width: '35rem', marginBottom: '20px', background: '#e4e2e9', align: 'right' }}> */}
                                  <div className='cardbody'>
                                    {values.bathroom && values.bathroom.length > 0 ? (
                                      values.bathroom.map((bathroom, index) => (
                                        <div key={index}>
                                          <Field name={`bathroom[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field><br />
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                          >
                                            Remove
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    ) : (
                                      <button className='glow-on-hover' style={{ color: 'black' }} type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all switchboards from the list */}
                                        <img width={73} src={sbord} alt="" />
                                      </button>
                                    )}
                                  </div>

                                </div>
                              )}
                            />

                            <div className='data_submit'>
                              <button type="submit" variant="primary" className='submit'>SUBMIT</button>
                            </div>





                          </div>


                        </Form>

                      </>
                    )}
                  </Formik>


                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClickClose1}>
                    Disagree
                  </Button>
                </DialogActions>
              </Dialog>

            </div> : <div> </div>
          }
        </div>

        <div>
          {
            Two ? <div>

              <Dialog
                fullScreen={fullScreen}
                open={Two}
                onClose={handleClickClose2}
                aria-labelledby="responsive-dialog-title"
              >
                {/* <DialogTitle id="responsive-dialog-title">
                  {"Fill your Home Details"}
                </DialogTitle> */}
                <DialogContent>


                  <Formik
                    initialValues={{ switchboards: [], bathroom: [], balcony: [] }}


                    onSubmit={(values) => {
                      // console.log("user input values", values)
                      handleSubmit(values)
                    }}>


                    {({ values }) => (

                      <>

                        <Form>


                          <FieldArray>
                            <div className='form'>
                              <p>Enter Your Flat Details</p>
                              <Field name={`location`} as="select">
                                {locationList.map(location => (
                                  <option value={location.code}>{location.name}</option>
                                ))}</Field>
                            </div>
                          </FieldArray>
                          <hr />



                          <div className="main">



                            <FieldArray
                              name="switchboards"
                              render={arrayHelpers => (
                                // console.log("about fieldArray prop " , arrayHelpers)
                                <div className="form_data">
                                  <p>SELECT SWITCH BOARD</p>

                                  <div className='cardbody'>

                                    {values.switchboards && values.switchboards.length > 0 ?

                                      (
                                        values.switchboards.map((switchboard, index) => (

                                          <div key={index}>

                                            <Field name={`switchboards[${index}].sw1`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}> {location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw2`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}> {location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw3`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw4`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw5`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>

                                            {/* removing the whole switch */}
                                            <button
                                              type="button"
                                              onClick={() => arrayHelpers.remove(index)}>
                                              Remove
                                            </button>
                                            {/* adding other switch */}
                                            <button
                                              type="button"
                                              onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                            >
                                              Add
                                            </button>
                                          </div>
                                        ))
                                      )

                                      :

                                      (
                                        <button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                          <img width={73} src={sbord} alt="" />
                                        </button>
                                      )}

                                  </div>

                                </div>

                              )}

                            />


                            <FieldArray
                              name="balcony"
                              render={arrayHelpers => (
                                <div className='balcony_data'>
                                  <p>SELECT BALCONY SWITCHES</p>

                                  <div >
                                    {values.balcony && values.balcony.length > 0 ? (
                                      values.balcony.map((balcony, index) => (
                                        <div key={index}>
                                          <Field name={`balcony[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={balcony.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field><br />
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                          >
                                            Remove
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    ) : (
                                      <button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all switchboards from the list */}
                                        <img width={73} src={sbord} alt="" />
                                      </button>
                                    )}
                                  </div>


                                </div>
                              )}
                            />





                            <FieldArray
                              name="bathroom"
                              render={arrayHelpers => (
                                <div className='bathroom_data'>
                                  <p>SELECT BATHROOM SWITCHES</p>
                                  {/* <Card style={{ width: '35rem', marginBottom: '20px', background: '#e4e2e9', align: 'right' }}> */}
                                  <div >
                                    {values.bathroom && values.bathroom.length > 0 ? (
                                      values.bathroom.map((bathroom, index) => (
                                        <div key={index}>
                                          <Field name={`bathroom[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field><br />
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                          >
                                            Remove
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    ) : (
                                      <button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all switchboards from the list */}
                                        <img width={73} src={sbord} alt="" />
                                      </button>
                                    )}
                                  </div>


                                </div>
                              )}
                            />

                            <div className='data_submit'>
                              <button type="submit" variant="primary" className='submit'>SUBMIT</button>
                            </div>

                          </div>

                        </Form>

                      </>
                    )}
                  </Formik>



                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClickClose2}>
                    Disagree
                  </Button>
                </DialogActions>
              </Dialog>




            </div> : <div> </div>
          }
        </div>

        <div>
          {
            Three ? <div>

              <Dialog
                fullScreen={fullScreen}
                open={Three}
                onClose={handleClickClose3}
                aria-labelledby="responsive-dialog-title"
              >
                {/* <DialogTitle id="responsive-dialog-title">
                  {"Fill your Home Details"}
                </DialogTitle> */}
                <DialogContent>


                  <Formik
                    initialValues={{ switchboards: [], bathroom: [], balcony: [] }}


                    onSubmit={(values) => {
                      console.log("user input values", values)
                      handleSubmit(values)
                    }}>


                    {({ values }) => (

                      <>

                        <Form>




                          <FieldArray>
                            <div className='form'>
                              <p>Enter Your Flat Details</p>
                              <Field name={`location`} as="select">
                                {locationList.map(location => (
                                  <option value={location.code}>{location.name}</option>
                                ))}</Field>
                            </div>
                          </FieldArray>
                          <hr />




                          <div className="main">


                            <FieldArray
                              name="switchboards"
                              render={arrayHelpers => (
                                // console.log("about fieldArray prop " , arrayHelpers)
                                <div className="form_data">
                                  <p>SELECT SWITCH BOARD</p>

                                  <div className='cardbody'>

                                    {values.switchboards && values.switchboards.length > 0 ?

                                      (
                                        values.switchboards.map((switchboard, index) => (

                                          <div key={index}>

                                            <Field name={`switchboards[${index}].sw1`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}> {location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw2`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}> {location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw3`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw4`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw5`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>
                                            <br />
                                            <br />
                                            {/* removing the whole switch */}
                                            <button
                                              type="button"
                                              onClick={() => arrayHelpers.remove(index)}>
                                              Remove
                                            </button>
                                            {/* adding other switch */}
                                            <button
                                              type="button"
                                              onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                            >
                                              Add
                                            </button>
                                          </div>
                                        ))
                                      )

                                      :

                                      (
                                        <Button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                          <img src={sbord} width={73} alt="" />
                                        </Button>
                                      )}

                                  </div>

                                </div>

                              )}

                            />


                            <FieldArray
                              name="balcony"
                              render={arrayHelpers => (
                                <div className='balcony_data'>
                                  <p >SELECT BALCONY SWITCHES</p>

                                  <div className='cardbody'>
                                    {values.balcony && values.balcony.length > 0 ? (
                                      values.balcony.map((balcony, index) => (
                                        <div key={index}>
                                          <Field name={`balcony[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={balcony.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field><br />
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                          >
                                            Remove
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    ) : (
                                      <button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all switchboards from the list */}
                                        <img src={sbord} width={73} alt="" />
                                      </button>
                                    )}
                                  </div>

                                </div>
                              )}
                            />



                            <FieldArray
                              name="bathroom"
                              render={arrayHelpers => (
                                <div className='bathroom_data'>
                                  <p >SELETCH BATHROOM SWITCHES</p>
                                  {/* <Card style={{ width: '35rem', marginBottom: '20px', background: '#e4e2e9', align: 'right' }}> */}
                                  <div className='cardbody'>
                                    {values.bathroom && values.bathroom.length > 0 ? (
                                      values.bathroom.map((bathroom, index) => (
                                        <div key={index}>
                                          <Field name={`bathroom[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field><br />
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                          >
                                            Remove
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    ) : (
                                      <button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all switchboards from the list */}
                                        <img src={sbord} width={73} alt="" />
                                      </button>
                                    )}
                                  </div>


                                </div>
                              )}
                            />

                            <div className='data_submit'>
                              <button type="submit" variant="primary" className='submit'>SUBMIT</button>
                            </div>


                          </div>


                        </Form>

                      </>
                    )}
                  </Formik>




                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClickClose3}>
                    Disagree
                  </Button>
                </DialogActions>
              </Dialog>




            </div> : <div> </div>
          }
        </div>

        <div>
          {
            Four ? <div>

              <Dialog
                fullScreen={fullScreen}
                open={Four}
                onClose={handleClickClose4}
                aria-labelledby="responsive-dialog-title"
              >
                {/* <DialogTitle id="responsive-dialog-title">
                  {"Fill your Home Details"}
                </DialogTitle> */}
                <DialogContent>


                  <Formik
                    initialValues={{ switchboards: [], bathroom: [], balcony: [] }}

                    onSubmit={(values) => {
                      console.log("user input values", values)
                      handleSubmit(values)
                    }}>


                    {({ values }) => (

                      <>

                        <Form>



                          <FieldArray>
                            <div className='form'>
                              <p>Enter Your Flat Details</p>
                              <Field name={`location`} as="select">
                                {locationList.map(location => (
                                  <option value={location.code}>{location.name}</option>
                                ))}</Field>
                            </div>
                          </FieldArray>
                          <hr />



                          <div className="main">



                            <FieldArray
                              name="switchboards"
                              render={arrayHelpers => (
                                // console.log("about fieldArray prop " , arrayHelpers)
                                <div className="form_data">
                                  <p>SELECT SWITCH BOARD</p>

                                  <div className='cardbody'>

                                    {values.switchboards && values.switchboards.length > 0 ?

                                      (
                                        values.switchboards.map((switchboard, index) => (

                                          <div key={index}>

                                            <Field name={`switchboards[${index}].sw1`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}> {location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw2`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}> {location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw3`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw4`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>

                                            <Field name={`switchboards[${index}].sw5`} as="select">
                                              {switchList.map(location => (
                                                <option value={location.code}>{location.name}</option>
                                              ))}</Field>
                                            <br />
                                            <br />
                                            {/* removing the whole switch */}
                                            <button
                                              type="button"
                                              onClick={() => arrayHelpers.remove(index)}>
                                              Remove
                                            </button>
                                            {/* adding other switch */}
                                            <button
                                              type="button"
                                              onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                            >
                                              Add
                                            </button>
                                          </div>
                                        ))
                                      )

                                      :

                                      (
                                        <Button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                          <img src={sbord} width={73} alt="" />
                                        </Button>
                                      )}

                                  </div>

                                </div>

                              )}

                            />


                            <FieldArray
                              name="balcony"
                              render={arrayHelpers => (
                                <div className='balcony_data'>
                                  <p>SELECT BALCONY SWITCHES</p>

                                  <div className='cardbody'>
                                    {values.balcony && values.balcony.length > 0 ? (
                                      values.balcony.map((balcony, index) => (
                                        <div key={index}>
                                          <Field name={`balcony[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={balcony.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`balcony[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field><br />
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                          >
                                            Remove
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    ) : (
                                      <button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all switchboards from the list */}
                                        <img src={sbord} width={73} alt="" />
                                      </button>
                                    )}
                                  </div>
                                  {/* </Card> */}
                                </div>
                              )}
                            />




                            <FieldArray
                              name="bathroom"
                              render={arrayHelpers => (
                                <div className='bathroom_data' >
                                  <p>SELECT BATHROOM SWITCHES</p>
                                  {/* <Card style={{ width: '35rem', marginBottom: '20px', background: '#e4e2e9', align: 'right' }}> */}
                                  <div className='cardbody'>
                                    {values.bathroom && values.bathroom.length > 0 ? (
                                      values.bathroom.map((bathroom, index) => (
                                        <div key={index}>
                                          <Field name={`bathroom[${index}].sw1`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw2`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw3`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw4`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field>
                                          <Field name={`bathroom[${index}].sw5`} as="select">
                                            {switchList.map(location => (
                                              <option value={location.code}>{location.name}</option>
                                            ))}</Field><br />
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                          >
                                            Remove
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                                          >
                                            Add
                                          </button>
                                        </div>
                                      ))
                                    ) : (
                                      <button className='glow-on-hover' type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all switchboards from the list */}
                                        <img src={sbord} width={73} alt="" />
                                      </button>
                                    )}
                                  </div>
                                  {/* </Card> */}

                                </div>
                              )}
                            />

                            <div className='data_submit'>
                              <button type="submit" variant="primary" className='submit'>SUBMIT</button>
                            </div>



                          </div>


                        </Form>

                      </>
                    )}
                  </Formik>




                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClickClose4}>
                    Disagree
                  </Button>
                </DialogActions>
              </Dialog>




            </div> : <div> </div>
          }
        </div>




      </div>





    </>

  )
}

export default HomeConfigure;











































































