const mongoose=require('mongoose')

const messSchema=new mongoose.Schema({
    messName:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        // requied:true
    },
    description:{
        type:String,
    }
    ,
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    vegNonveg:{
        type:String,
        enum:['veg','nonveg','both'],
        required:true
    },
    images:{
        type:String
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    price:{
        type:Number,
        required:true
    }
});

const Mess=mongoose.model('Mess',messSchema)

module.exports=Mess