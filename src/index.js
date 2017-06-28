const express = require("express")
const app = express()
const port = process.env["PORT"] || 8120

app.use("/static",express.static(__dirname+"/static"))

app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/views/index.html")
})

app.listen(port,()=>{
	console.log("Listening on *:"+port)
})