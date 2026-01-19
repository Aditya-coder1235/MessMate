const Review = require('../models/review')


exports.createreview=async(req,res)=>{
    try {
        let { rating, comment, mess }=req.body

        if(!rating || !comment || !mess){
            return res.status(400).json({message:"All feilds Require"})
        }

        let newReview=new Review({rating,comment,mess,user:req.user.id})

        await newReview.save()

        res.status(200).json({message:'Review create successfully'});
        
    } catch (error) {
        res.status(400).json({message:"Error during Creating Review"})
    }
}

exports.getReviewByMessId = async(req, res) => {
    try {
        let {id}=req.params

        let reviews=await Review.find({mess:id}).populate('user')

        res.status(200).json({message:"reviews fetched successfully", reviews:reviews})

    } catch (error) {
        res.status(400).json({ message: "Error during Get Review" })
    }
}


exports.updateReview = (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ message: "Error during Update Review" })
    }
}

exports.deleteReview =async (req, res) => {
    try {
        let {userId}=req.params

        let review=await Review.findOne({user:userId});

        await review.deleteOne()

        res.status(200).json({message:"Review deleted Successfully"})
    

    } catch (error) {
        res.status(400).json({ message: "Error during Delete Review" })
    }
}