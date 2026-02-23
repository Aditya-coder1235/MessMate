const Mess = require('../models/mess')


exports.createMess = async (req, res) => {
    try {
        let { messName, address, city, vegNonveg, price, description } = req.body

        if (!messName || !address || !city || !vegNonveg) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const existingMess = await Mess.findOne({ owner: req.user.id });
        if (existingMess) {
            return res.status(400).json({ message: 'You have already registered a mess' });
        }


        const newMess = new Mess({ messName, address, city, vegNonveg, owner: req.user.id, price, description, images: req.file.path });

        await newMess.save()

        res.status(200).json({ message: 'Mess create successfully', mess: newMess })
    } catch (error) {
        res.status(400).json({ message: "Error during creating mess" })
    }
}


exports.getAllMess = async (req, res) => {
    try {
        let allMess = await Mess.find().populate('owner')

        res.status(200).json({ message: 'All Mess fetched', AllMess: allMess })

    } catch (error) {
        res.status(400).json({ message: "Error during get all mess" })
    }
}


exports.getMessById = async (req, res) => {
    try {
        let { id } = req.params
        let mess = await Mess.findById(id).populate('owner')

        res.status(200).json({ message: "Mess fetched successfully", Mess: mess })

    } catch (error) {
        res.status(400).json({ message: "Error during get by id  mess" })
    }
}

exports.getMessForMessOwner = async (req, res) => {
    try {
        let { ownerId } = req.params
        let mess = await Mess.findOne({ owner: ownerId }).populate('owner')

        res.status(200).json({ message: "Mess fetched successfully", Mess: mess })

    } catch (error) {
        res.status(400).json({ message: "Error during get by id  mess" })
    }
}


exports.updateMess = async (req, res) => {
    try {
        let { id } = req.params
        let { messName, address, city, vegNonveg, price, description } = req.body

        await Mess.findByIdAndUpdate(id, { messName, address, city, vegNonveg, price, description });



        res.status(200).json({ message: "mess update successfully" });


    } catch (error) {
        res.status(400).json({ message: "Error during update mess" })
    }
}


exports.deleteMase = async (req, res) => {
    try {
        let { id } = req.params
        await Mess.findByIdAndDelete(id)

        // await mess.deleteOne()

        res.status(200).json({ message: "mess deleted successfully" });


    } catch (error) {
        res.status(400).json({ message: "Error during delete mess" })
    }
}


