const Menu = require('../models/menu')

exports.addMenu = async (req, res) => {
    try {
        let { day, breakfast, lunch, dinner ,mess} = req.body

        let newMenu = new Menu({ day, breakfast, lunch, dinner,mess })

        await newMenu.save()

        res.status(200).json({ message: 'Menu added successfully', menu: newMenu })

    } catch (error) {
        res.status(400).josn({ message: 'Error during AddMenu' })
    }
}

// exports.getWeeklyMneu = (req, res) => {

// }

exports.getMenuForThierMess=async(req,res)=>{
    try {
        let {messId}=req.params
        let menu = await Menu.find({mess:messId})

        res.status(200).json({ message: 'Todays menu is', menu: menu })

    } catch (error) {
        res.status(400).josn({ message: 'Error during Get Menu' })
    }
}

exports.getDailymenu = async (req, res) => {
    try {
        let todayMenu = await Menu.find({})

        res.status(200).json({ message: 'Todays menu is', menu: todayMenu })

    } catch (error) {
        res.status(400).josn({ message: 'Error during Get Menu' })
    }
}

exports.updateMenu = async(req, res) => {
    try {
        let { day, breakfast, lunch, dinner } = req.body
        let { id } = req.params

        let menu=await Menu.findOne({mess:id})
        // await Menu.findByIdAndUpdate(id,{day,breakfast,lunch,dinner})

        if(!menu){
            return res.status(400).josn({ message: 'Menu Not Found' })
        }

        menu.day=day
        menu.breakfast = breakfast
        menu.lunch = lunch
        menu.dinner = dinner

        await menu.save()

        res.status(200).json({ message: 'Menu Update'})


    } catch (error) {
        res.status(400).josn({ message: 'Error during Update Menu' })
    }
}

exports.deleteMenu = async(req, res) => {
    try {
        let { id } = req.params
        let menu = await Menu.findOne({ mess: id })
        if (!menu) {
            return res.status(400).josn({ message: 'Menu Not Found' })
        }
        await menu.deleteOne()
        // await Menu.findByIdAndDelete({})

        res.status(200).json({ message: 'Menu Deleted' })


    } catch (error) {
        res.status(400).josn({ message: 'Error during Delete Menu' })
    }
}