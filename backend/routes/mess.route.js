const express=require('express')
const { createMess, getAllMess, getMessById, updateMess, deleteMase, getMessForMessOwner, getMessByCity } = require('../controllers/messController')
const router=express.Router()
const {isAuth}=require('../middlewares/authMiddleware')
const upload=require('../middlewares/upload')
const allowRoles=require('../middlewares/roleMiddleware')

router.post('/create', isAuth, allowRoles("owner"), upload.single('image'),createMess)
router.get('/getAll',getAllMess)
router.get('/getById/:id',getMessById)
router.get('/getOwnerMess/:ownerId',  isAuth,getMessForMessOwner)
router.put('/update/:id',  isAuth,updateMess)
router.delete('/delete/:id',  isAuth,deleteMase)
// router.patch()

module.exports=router