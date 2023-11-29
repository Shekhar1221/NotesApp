const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
          },
          message: 'Please enter a valid email'
        }
      },
      password:{
        type:String,
        required:true
      } 
})

module.exports=mongoose.model("User",userSchema);
