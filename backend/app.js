const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080;
const cors = require('cors')
const cookieParser=require('cookie-parser')

//routers
const authRouter=require('./routes/auth.route')
const menuRouter=require('./routes/menu.route')
const messRouter=require('./routes/mess.route')
const reviewRouter=require('./routes/review.route')
const userRouter=require('./routes/user.route')

//database connection
const mongoose = require('mongoose')
async function main() {
    await mongoose.connect(process.env.MONGO_URI)
}
main().then(() => console.log("Connect to Db"))
    .catch((err) => console.log(err));


//middlewares
app.use(
    cors({
        origin:[ "http://localhost:5173",
        "https://messmate111.vercel.app/"],
        credentials: true,              
    })
);
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hi, i am Root');
})

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/menu',menuRouter)
app.use('/api/mess',messRouter)
app.use('/api/review',reviewRouter)


app.listen(port, () => {
    console.log("server start at 8080 port");
})