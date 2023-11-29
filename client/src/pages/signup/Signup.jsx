import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

import './style.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {signUpUser} from '../../store/userSlice'

function Signup() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  console.log(email,password)

  const dispatch=useDispatch()
  
  

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
              <p className="text-white-50 mb-5">Please enter your email and password</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' onChange={(e)=>setEmail(e.target.value)} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' onChange={(e)=>setPassword(e.target.value)} labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={()=>{dispatch(signUpUser({email,password}))}}>
                Signup
              </MDBBtn>
              <div>
                <p className="mb-0">Already have an account? <Link to={'/'}  class="text-white-50 fw-bold">LOGIN</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;