const express = require('express');

const db = require('./db/db.js');
require('dotenv').config()

const app = express();

const router = require('./router'); 

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 4000;

db.then(() => {
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  })
    .catch((err) => console.log(err.message)); 