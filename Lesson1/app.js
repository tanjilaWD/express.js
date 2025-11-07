const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user", userRouter);

app.use('/register', (req, res)=>{
   // res.status(200).json({
   //    'name': 'Tanjila khatun',
   //    'message': 'I am register page',
   //    statusCode: 200
   // });


   // res.redirect('/login');


   res.statusCode = 200;
   res.sendFile(__dirname+ "/views/register.html");
});

app.use("/", (req,res) =>{
   res.statusCode = 200 ;
   res.sendFile(__dirname+ "/views/index.html");
});

app.get("/login",(req,res) =>{
   // res.cookie("name", "Tanjila");
   // res.cookie("age", "20");
   res.clearCookie("name");
   res.append("id", "130000");
   res.end();
});

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