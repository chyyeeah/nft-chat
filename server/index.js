require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve('client/dist')));

app.get('/nfts', (req, res) => {
  // https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20
  console.log(req.query);
  res.sendStatus(200);
});

app.get('**', (req, res) => res.sendFile(path.resolve('client/dist/index.html')));

app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`));