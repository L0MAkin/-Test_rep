const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');
const http = require('http');
const hostname = '127.0.0.1';


require('dotenv').config();


app.use(bodyParser.json());
app.use(usersRoute);
app.use((err, req, res, next) => {
    if(err.statusCode) {
        res.status(err.statusCode).send(err.message);
    } else {
        console.log(err);
        res.status(500).send('Something unexpected happened');
    }
});
// we will eventually use env variables
const PORT = process.env.PORT;
app.listen(PORT, hostname,   () => {
  console.log('Server Started');
});

