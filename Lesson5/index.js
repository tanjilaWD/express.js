// post request with josn or from data

const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.post("/user",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`welcome ${name}. You are ${age}.`)

});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});