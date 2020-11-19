const express = require('express');
const {db} = require('./models');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/', (req, res, next) => {
    res.send('hello world'); 
})

const PORT = 3000;

app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
});
  