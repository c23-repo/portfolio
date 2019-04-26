'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public/starter-code'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: './public/starter-code'})
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
