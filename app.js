const express =require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 8000;

app.listen(PORT, function (){
  console.log(`O Express está rodando na porta ${PORT}.`);
});

//body parser
app.use(bodyParser.urlencoded({extend: false}))

//db connection
db.authenticate()
  . then(() => {
    console.log("Connect to sqlite database.")
  })
  .catch( err => {
    console.log("Ocorreu um erro ao conectar", err)
  });

//routes
app.get('/', (req, res) => {
  res.send("Está funcionando 2.")
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));