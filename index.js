require('dotenv').config()
const express = require('express');
const app = express();
const port = 1234;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;



// app.METHOD(path, HANDLER);

app.get('/', (req, res) =>{
    res.send('Welcome to Spotify Stats!');
});

app.get('/login', (req, res)=>{
    res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`);
});



app.listen(port, ()=>{
    console.log(`We are listening at http://localhost:${port}`)
});

