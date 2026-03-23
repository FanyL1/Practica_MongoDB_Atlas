import express from "express"

const App = express()

app.get("/",(req,res)=>{
    res.send("Ready")
})

const port = process.env.PORT

app.listen(port,()=>{
    console.log("Server Working");
    
})