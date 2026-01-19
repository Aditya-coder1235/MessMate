const express=require('express')
const { addMenu, getWeeklyMneu, getDailymenu, updateMenu, deleteMenu, getMenuForThierMess } = require('../controllers/menuController')
const router=express.Router()

router.post('/create',addMenu)
// router.get('/getWeakly/:messId',getWeeklyMneu)
router.get('/getMenuForTheirMess/:messId',getMenuForThierMess);
router.get('/getDailyMenu',getDailymenu)
router.put('/update/:id',updateMenu)
router.delete('/delete/:id',deleteMenu)

module.exports=router