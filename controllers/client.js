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

//New router
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//DELETE route
router.delete('/:id', (req, res) => {
    Client.findByIdAndDelete(req.params.id)
    .then((foundClient) => {
        res.redirect('/clients')
    })
    .catch((err) => {
        res.status(500).json({error:'Error deleting client'})
    })
})
//create router
router.post('/', (req, res) => {
   Client.create(req.body)
   .then((createdClient) => {
    res.redirect('/clients')
   })
   .catch((err) => {
    res.status(501).send(err.message)
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