import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpUser=createAsyncThunk('/register',async({email,password})=>{
    const data={
          email,password
    }
    const response=await axios.post('/api/users/signup',data)
    return response.data
})

export const loginUser=createAsyncThunk('/login',async({email,password})=>{
    // console.log(password,email,"11")
    const data={
          email,password
    }
    const response=await axios.post('/api/users/login',data)
    return response.data
})

export const logout=createAsyncThunk('/logout',async()=>{  
  const response=await axios.post('/api/users/logout')
  return response.data
})

export const userSlice=createSlice({
    name: "user",
  initialState: {
    data:[],
    data2:[],
    email: "",
    password: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
  },
  extraReducers:(builder)=> {
    // Extra reducer comes here
    builder.addCase(signUpUser.pending, (state, action) => {
        state.isFetching =true
        state.isError=false
        state.isSuccess=false
    })
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.isFetching = false
      state.isError=false
      state.isSuccess=true
    //   console.log(action.payload,"payload")
      state.data=action.payload
  })
  builder.addCase(signUpUser.rejected, (state, action) => {
      state.isFetching = false
      state.isError=true
      state.isSuccess=false
  })
  builder.addCase(loginUser.pending, (state, action) => {
    state.isFetching =true
    state.isError=false
    state.isSuccess=false
})
builder.addCase(loginUser.fulfilled, (state, action) => {
  state.isFetching = false
  state.isError=false
  state.isSuccess=true
//   console.log(action.payload,"payload")
  state.data2=action.payload
})
builder.addCase(loginUser.rejected, (state, action) => {
  state.isFetching = false
  state.isError=true
  state.isSuccess=false
})
builder.addCase(logout.pending, (state, action) => {
  state.isFetching =true
  state.isError=false
  state.isSuccess=false
})
builder.addCase(logout.fulfilled, (state, action) => {
state.isFetching = false
state.isError=false
state.isSuccess=true
})
builder.addCase(logout.rejected, (state, action) => {
state.isFetching = false
state.isError=true
state.isSuccess=false
})
  },
})

export default userSlice.reducer;