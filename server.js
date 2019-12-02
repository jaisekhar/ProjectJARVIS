var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose');
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const mongoURI = 'mongodb+srv://jai:jai@cluster0-smwzh.mongodb.net/test?retryWrites=true&w=majority';
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
var Users = require('./routes/Users');
var Movies = require('./routes/Movies');
app.use('/users', Users);
app.use('/movies', Movies);
app.listen(port, function() {
  console.log('Server is running on port: ' + port)
});
