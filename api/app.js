const express=require('express');
const dbConnection=require('./dbConnect')
const dotenv=require('dotenv')
const cors=require('cors')


const userRouter=require('./routes/user')
const notesRouter=require('./routes/notes');
const { verification } = require('./middlewares/auth');
const cookieParser=require('cookie-parser')

dotenv.config();

dbConnection();

const app=express();
app.use(cors())
app.use(express.json())
app.use(cookieParser())


// User router
app.use('/api/users',userRouter)
// Notes router
app.use('/api/notes',verification,notesRouter)

app.listen(5000,'127.0.0.1',()=>{ 
    console.log('connected to server successfully');
})