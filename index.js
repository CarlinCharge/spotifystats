require('dotenv').config()
const express = require('express');
const app = express();
const port = 1234;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;



// app.METHOD(path, HANDLER);

app.get('/nodemon-test', (req, res) => {
   res.send('Nodemon works');
  console.log('Nodemon route hit');
});



app.listen(port, ()=>{
    console.log(`We are listening at http://localhost:${port}`)
});

