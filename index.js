const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const port = 1234;

app.listen(port, ()=>{
    console.log(`We are listening at http://localhost:${port}`)
});