const express=require('express')
const { getUserProfile, upadteProfile } = require('../controllers/userController')
const router=express.Router()

router.get('/getUserProfile/:id',getUserProfile)
router.post('/updateUserProfile',upadteProfile)

module.exports=router