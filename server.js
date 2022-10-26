const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/post-test', (req,res)=>{
  console.log('GotBody:', req.body);
  res.sendStatus(200);
})

app.use(express.static(__dirname + '/client'))

app.listen(port, () => console.log(`Listening on port ${port}`));