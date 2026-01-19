const mongoose=require('mongoose')

const reviewSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    mess: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mess",
        required: true,
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },

    comment: {
        type: String,
    },
});

const Review=mongoose.model('Review',reviewSchema)

module.exports=Review