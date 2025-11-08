const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get("/register",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/register",(req,res)=>{
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h1>Your name is ${fullName} and age is ${age} </h1>`);

});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});