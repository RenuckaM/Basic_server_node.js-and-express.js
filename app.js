import express from "express"

const app = express()
const port = 3000

app.get("/",(req,res)=> {
    res.send("Hello World!")
})

app.get("/login", (req, res) => {
    res.send("Login to your account")
})

app.listen(port, () => {
    console.log("Server is running!!!")
})