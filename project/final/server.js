const express = require('express');
const app = express();
const Joi = require('joi');
const cors = require('cors');
const multer = require('multer');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const mongoose = require('mongoose');

const upload = multer({ dest: __dirname + '/images/'});

mongoose
    .connect('mongodb+srv://joshCook:d85E3y01kxAggwI2@assignment17.yyxfcpj.mongodb.net/')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.get('/', (req, res) => {
    res.send(_dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.send(_dirname + '/contact.html');
});

app.get('/helicopters', (req, res) => {
    res.send(_dirname + '/helicopters.html');
});

app.get('/planes', (req, res) => {
    res.send(_dirname + '/planes.html');
});

app.get('/replicas', (req, res) => {
    res.send(_dirname + '/replicas.html');
});

app.get('/stories', (req, res) => {
    res.send(_dirname + '/stories.html');
});

