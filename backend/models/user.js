const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique: true,
    },
    role:{
        type:String,
        required:true,
        enum:['user','owner','admin'],
        default:'user'
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true   
    },
    isActive:{
        type:Boolean,
        default:true
    }
});


const User=mongoose.model('User',userSchema);

module.exports=User