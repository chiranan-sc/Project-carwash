const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(core());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"react"

})

const port = 5050;
app.listen(port,()=>{
    console.log("listening");
})

app.post('/Signup',(reg,res)=>{
    const sql = "INSERT INTO User Account ('firstname , lastname, username, password, email, phone) VALUE(?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.phone
    ]
    db.quary(sql,[values],(err,data)=>{
        if(err){
            return res.json("error");

        }
        return res.json(data);
        
    })
})