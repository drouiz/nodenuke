const express = require('express');
const app = express();

const bigNumber = 100000000000000000;

app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/loop', function (req, res) {
    console.log('bucle infinito que reventará node');
    for (i=0; i < bigNumber; i++)
    {

    }
    res.send('Sales');
  })

  app.get('/normal', function (req, res) {
    console.log('Página normal');
    res.send('Normal');
  })