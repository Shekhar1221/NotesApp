import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import notesSlice from './notesSlice'

export const store=configureStore({
    reducer:{
        user:userSlice,
        notes:notesSlice
    }
})