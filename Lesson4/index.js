const express = require("express");
const app = express();
const PORT = 4000;


app.get("/", (req,res)=>{
  const id = req.header('id');
  const name = req.header('name');
  res.send(`<h1>Student id is : ${id}, name is : ${name}</h1>`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})

// header parameter