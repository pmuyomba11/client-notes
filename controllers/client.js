const express = require('express');
const router = express.Router();
const Client = require('../models/client')


//Index...
router.get('/', (req, res) => {
    Client.find({})
    .then((allClients) => {
        res.render('index.ejs', {
            clients : allClients
        })
    })
    .catch((err) => {
        res.status(404).send(err.message)
    })
})

//Create
router.post('/', (req, res) => {
    Client.create(req.body)
        .then((createdClient) => {
            res.send(createdClient)
        })
        .catch((err) => {
            res.status(404).send(err.message)
        })
})

//Show route
router.get('/:id', (req, res) => {
    Client.findById(req.params.id)
    .then((foundClient) => {
        res.render('show.ejs', {
            client: foundClient
        })
    })
    .catch((err) => {
        res.status(404).send(err.message)
    })
})

module.exports = router