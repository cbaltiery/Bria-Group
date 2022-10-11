require("dotenv").config()
const Express = require("express");
const server = Express();
const cors = require("cors")
server.use(cors())

// ------- Controllers -------\\
const user = require("./controllers/user.controller")
const garden = require("./controllers/garden.controller")
const roundtable = require("./controllers/roundtable.controller")
const api = require("./controllers/api.controller")
const email = require("./controllers/emailList.controller")

// ------- DB Connection -------\\
const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASEURL)
const db = mongoose.connection
db.once("open", ()=> console.log("Connected to the DB"))


server.use(Express.urlencoded())
server.use(Express.json())

// ------- Links -------\\
server.use("/email",email)
server.use("/user",user)
server.use("/garden",garden)
server.use("/roundtable",roundtable)
server.use("/api", api)

server.listen(process.env.PORT, ()=>{
    console.log(`server listneing on ${process.env.PORT}`)
})