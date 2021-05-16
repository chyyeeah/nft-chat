require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('**', (req, res) => res.sendFile(path.resolve('client/dist/index.html')));

app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`));