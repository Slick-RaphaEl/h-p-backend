const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./database/connection");

const app = express();

dotenv.config({path: '.env'});
connectDB();

const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', require('./router/routes'));

app.get('/', (req, res) => {
    res.send('hello world from express');
});


app.listen(port, () => {
    console.log(`express server is listening on http://localhost:${port}`);
});