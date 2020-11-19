const express = require('express');
const {db, Page, User} = require('./models');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/', (req, res, next) => {
    res.send('hello world'); 
})

const init = async () => {
    await Page.sync();
    await User.sync();
    // make sure that you have a PORT constant
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
}
  
init();
  