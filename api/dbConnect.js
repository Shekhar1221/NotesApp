const mongoose=require('mongoose');

const dbConnection=async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('connected to db successfully');
}

module.exports=dbConnection;