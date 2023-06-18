const express = require('express');

const app = express();

// app.METHOD(path, HANDLER);

app.get('/', (req, res) => {
    data = {
        name: 'Carl',
        isAwesome: true
    };
    res.json(data)
});

const port = 1234;

app.listen(port, ()=>{
    console.log(`We are listening at http://localhost:${port}`)
});

