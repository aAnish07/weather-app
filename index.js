const express = require('express');
const config = require('./utils/config');
const request = require('./utils/weatherCall');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server up and running");
})

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/weather/:city', async (req, res) => {
    const { city } = req.params;
    try {
        const response = await request(city, config);
        res.render('data', {
            city: response.name,
            temp: response.main.temp,
            iconURL: `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
            comment: response.weather[0].main
        })
    } catch {
        res.render('error');
    }
})