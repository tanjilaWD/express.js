const express = require('express');
const app = express();
const PORT = 3001;


app.get("/", (req,res)=>{
  const id =  req.query.id;
  const name = req.query.name;
  res.send(`Student name is: ${name}, id is : ${id}`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})

//http://localhost:3001/?id=101&name=Tanjila