const mongoose=require('mongoose')

const menuSchema=new mongoose.Schema({
    mess:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Mess'
    },
    day:{
        type:String,
        enum:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        required:true
    },
    breakfast:{
        type:String
    },
    lunch:{
        type: String
    },
    dinner: {
        type: String
    }
});

const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu