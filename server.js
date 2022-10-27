const express = require('express');

const app = express();
const port = 5000;
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.json());

app.use(bodyParser.urlencoded({defaultLayout: 'main'}));
app.use(bodyParser.json());

app.get('/postagens', (req, res) => {
  res.json([{'menssagem':'texto escrito na guia postagens'}]);
  console.log('Backend on...')

});

app.post('/postagens', (req, res) => {


res.send(`Conteudo: ${req.body.menssagem}`)

  console.log('GotBody:', req.body);
  res.sendStatus(200);
  res.json('/postagens', {
    name: req.body.name
  });
});




app.use(cors());;

app.use(express.static(__dirname + '/client'))

app.listen(port, () => console.log(`Listening on port ${port}`));