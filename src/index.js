const express = require('express');
const axios = require('axios');

const app = express();

const API_KEY = 'f527754a92e1b7ddc83207cbdc0b955b';

app.get('/', (req,res) => {
    res.send('welcome');
});

app.get('/api/weather/:cc/:city', (req,res) =>{
    // res.send('weather');
    const {cc,city} = req.param;
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&appid=${API_KEY}&units=metric`)
    .then(response => {
        res.send(response.data);
    })
    .catch(err => console.log(err));
});

app.listen(3000, () => console.log('app listen on port 3000'));