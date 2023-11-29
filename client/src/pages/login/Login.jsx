import React, { useEffect, useState } from 'react';
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
import { loginUser } from '../../store/userSlice';

import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function LOGIN() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [check,setCheck]=useState(true)
  // console.log(email,password)

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {data2}=useSelector(state=>state.user)
  // console.log(data2.status)


  useEffect(()=>{
    if(data2.status==='success'){
      navigate('/notes')
    }
  },[data2.status,navigate])
 

// useEffect(()=>{
  
// },[check])

  const handleClick=()=>{
    //  setCheck(!check)
    dispatch(loginUser({email,password}))
    // if(data2.status==='success'){
      // console.log(data2.status)
      // data2.status==='success'? navigate('/notes'):navigate('/')
    // }
  }

  // console.log(check)
  

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' onChange={(e)=>setEmail(e.target.value)} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' onChange={(e)=>setPassword(e.target.value)} labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><Link to={'/reset'} className="text-white-50"  >Forgot password?</Link></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleClick} >
                Login
              </MDBBtn>
              <div>
                <p className="mb-0">Don't have an account? <Link to={'/signup'}  class="text-white-50 fw-bold">Sign Up</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LOGIN;