require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve('client/dist')));

app.get('/nfts', async (req, res) => {
  try {
    const page = Number(req.query.page);
    const offset = (page - 1) * 20;
    const response = await axios.get(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=20`);
    const payload = response.data.assets;
    res.send(payload);
  } catch (error) {
    res.sendStatus(400);
  }
});

app.get('**', (req, res) => res.sendFile(path.resolve('client/dist/index.html')));

app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`));