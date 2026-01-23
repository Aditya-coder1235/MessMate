const User=require('../models/user');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
require('dotenv').config()

exports.signupUser=async(req,res)=>{
    try {
        let { name, email, password, phone, address ,city,role}=req.body

        if(!name || !email || !password || !role){
            return res.status(400).json({ message: 'All fileds are required' })
        }

        let user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:'User Already Exists'})
        }

        let hashPassword=await bcrypt.hash(password,13)

        let newUser=new User({name,email,password:hashPassword,phone,address,city,role})
        await newUser.save()

        res.status(200).json({message:'User register successfully',user:newUser})
        
    } catch (error) {
        res.status(400).json({message:"Error during Signup"})
    }
}

exports.loginUser = async(req, res) => {
    try {
        let {email,password}=req.body;

        let user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:'User Not Found'})
        }

        let isMatched=await bcrypt.compare(password,user.password)
        if(!isMatched){
            return res.status(400).json({message:'Invalid Password'})
        }

        let token=jwt.sign(
            {id:user._id,role:user.role,email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        )

        res.cookie('token',token,{
            httpOnly: true,
            secure: true,      
            sameSite: "none",    
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.status(200).json({message:"User login successfully",token:token,user:user})


    } catch (error) {
        res.status(400).json({ message: "Error during Login" })
    }
}

exports.logoutUser = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });


        res.status(200).json({message:'Logout successfully'});

    } catch (error) {
        res.status(400).json({ message: "Error during Logout" })
    }
}