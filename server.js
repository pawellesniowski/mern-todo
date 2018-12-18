const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { dbUrl, port } = require('./config/keys');

const app = express();

const items = require('./routes/api/items');

//bodyparser middleware:
app.use(bodyParser.json());

// connect to mongo db:
mongoose
    .connect(dbUrl,  { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB error: ', err));

// use routes:
app.use('/api/items', items);

// server running:
app.listen(port, () => {
    console.log("app listening on port", port);
});
