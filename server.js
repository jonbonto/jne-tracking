const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fetch = require('node-fetch');

const app = express();

require('dotenv').config();

app.use(morgan('tiny'));
app.use(cors());

console.log(process.env.jne_username)

const details = {
  username: process.env.jne_username,
  api_key: process.env.key
};
const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
const getData = (awb) => {
  return fetch(`http://apiv2.jne.co.id:10101/tracing/api/list/cnote/${awb}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    body: formBody
  }).then(resp => resp.json());  
}

app.get('/jne/:awb', async (req, res) => {
  const data = await getData(req.params.awb);
  res.json(data);
});

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found');
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port', port);
});
