import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNotes=createAsyncThunk('/notes',async()=>{
    
    const response=await axios.get('/api/notes/')
    return response.data
})

export const postNotes=createAsyncThunk('/postNotes',async({title,description})=>{
  const data={
    title,description
  }
  const response=await axios.post('/api/notes/addNote/',data)
  return response.data
})

export const getNotesById=createAsyncThunk('/notesById',async({id})=>{
  const response=await axios.get(`/api/notes/${id}`)
  return response.data
})

export const deleteNote=createAsyncThunk('deleteNote',async(id)=>{
  const response=await axios.delete(`/api/notes/${id}`)
   return response.data
})

export const updateNote=createAsyncThunk('updateNote',async({id,title,description})=>{
  const updatedata={title,description}
  const response=await axios.put(`/api/notes/${id}`,updatedata)
   return response.data
})


export const notesSlice=createSlice({
    name: "notes",
  initialState: {
    notesData:[],
    singleNoteData:[],
    updatedNoteData:[],
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
    builder.addCase(getNotes.pending, (state, action) => {
        state.isFetching =true
        state.isError=false
        state.isSuccess=false
    })
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.isFetching = false
      state.isError=false
      state.isSuccess=true
    //   console.log(action.payload,"payload")
      state.notesData=action.payload
  })
  builder.addCase(getNotes.rejected, (state, action) => {
      state.isFetching = false
      state.isError=true
      state.isSuccess=false
  })  
  builder.addCase(postNotes.pending, (state, action) => {
    state.isFetching =true
    state.isError=false
    state.isSuccess=false
})
builder.addCase(postNotes.fulfilled, (state, action) => {
  state.isFetching = false
  state.isError=false
  state.isSuccess=true
})
builder.addCase(postNotes.rejected, (state, action) => {
  state.isFetching = false
  state.isError=true
  state.isSuccess=false
})  
builder.addCase(getNotesById.pending, (state, action) => {
  state.isFetching =true
  state.isError=false
  state.isSuccess=false
})
builder.addCase(getNotesById.fulfilled, (state, action) => {
state.isFetching = false
state.isError=false
state.isSuccess=true
state.singleNoteData=action.payload
})
builder.addCase(getNotesById.rejected, (state, action) => {
state.isFetching = false
state.isError=true
state.isSuccess=false
})  

builder.addCase(deleteNote.pending, (state, action) => {
  state.isFetching =true
  state.isError=false
  state.isSuccess=false
})
builder.addCase(deleteNote.fulfilled, (state, action) => {
state.isFetching = false
state.isError=false
state.isSuccess=true
//   console.log(action.payload,"payload")
// state.notesData=action.payload
})
builder.addCase(deleteNote.rejected, (state, action) => {
state.isFetching = false
state.isError=true
state.isSuccess=false
})  

builder.addCase(updateNote.pending, (state, action) => {
  state.isFetching =true
  state.isError=false
  state.isSuccess=false
})
builder.addCase(updateNote.fulfilled, (state, action) => {
state.isFetching = false
state.isError=false
state.isSuccess=true
state.updatedNoteData=action.payload
})
builder.addCase(updateNote.rejected, (state, action) => {
state.isFetching = false
state.isError=true
state.isSuccess=false
})  

  },
})

export default notesSlice.reducer;