const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user", userRouter);

app.use('/',(req, res)=>{
   res.send('I am a get request at home route'); 
   res.end();
} );

app.use((req, res) =>{
   res.send('<h2>404 ! Not a valid url</h2>')
})
 
// app.post('/',(req, res)=>{
//    res.send('I am a post request at home route'); 
//    res.end();
// } );

// app.put('/',(req, res)=>{
//    res.send('I am a put request at home route'); 
//    res.end();
// } );

// app.delete('/',(req, res)=>{
//    res.send('I am a delete request at home route'); 
//    res.end();
// } );






module.exports = app