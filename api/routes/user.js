const express=require('express');
const router=express.Router();
const{createUser,login,logout,}=require('../controllers/user');
const { verification } = require('../middlewares/auth');
router.post('/signup',createUser);
router.post('/login',login)
router.post('/logout',logout)

module.exports=router;

