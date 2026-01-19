const express = require('express')
const { createreview, getReviewByMessId, updateReview, deleteReview } = require('../controllers/reviewsController')
const router = express.Router()
const {isAuth}=require('../middlewares/authMiddleware')

router.post('/create', isAuth,createreview)
router.get('/getReview/:id', getReviewByMessId)
router.put('/update/:id', updateReview)
router.delete('/delete/:userId', deleteReview)

module.exports = router