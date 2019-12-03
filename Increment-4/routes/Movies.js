const express = require('express');
const movies = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const Movie = require('../models/Movie');
movies.use(cors());

process.env.SECRET_KEY = 'secret';

movies.get('/list', (req, res) => {
    // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    //     // console.log(decoded);
    Movie.find({})
        .sort([['m_score', -1]])
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

movies.post('/search', (req, res) => {
    // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    //     // console.log(decoded);
    console.log(req.body.keyword);
    Movie.find({"m_name": {$regex: new RegExp(req.body.keyword, "i")}})
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

movies.post('/details', (req, res) => {
    // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    //     // console.log(decoded);
    console.log(req.body.id);
    Movie.findOne({
        m_id: req.body.id
    })
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
