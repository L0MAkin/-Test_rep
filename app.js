const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');


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
const PORT = process.env.PORT || 8083;
app.listen(PORT,   () => {
  console.log('(`Server running at http://${hostname}:${port}/`)');
});

