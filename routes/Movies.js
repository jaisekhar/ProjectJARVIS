const express = require('express');
const movies = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const Movie = require('../models/Movie');
movies.use(cors());

process.env.SECRET_KEY = 'secret';

movies.get('/list', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    console.log(decoded);
    Movie.find({})
        .then(movie => {
            if (movie) {
                res.json(movie);
                console.log(movie)
            } else {
                res.send('User does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

module.exports = movies;
