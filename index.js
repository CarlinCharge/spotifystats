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

app.get('/awesome-generator', (req, res) => {
  const { name, isAwesome } = req.query;
  res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`);
  console.log('Awesome route hit')
});

app.get('/nodemon-test', (req, res) => {
   res.send('Nodemon works');
  console.log('Nodemon route hit');
});

//  http://localhost:1234/awesome-generator?name=Carl&isAwesome=true provide the following query params 
// We are destructuring here 

const port = 1234;

app.listen(port, ()=>{
    console.log(`We are listening at http://localhost:${port}`)
});

