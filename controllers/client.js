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

//Update route..
router.put('/:id', (req, res) => {
    Client.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((clientToBeUpdated) => {
        res.redirect(`/clients/${clientToBeUpdated._id}`)
    })
    .catch((error) => {
        res.status(501).send(err.message)
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

//Edit route 
router.get('/:id/edit', (req, res) => {
    Client.findById(req.params.id)
    .then((toBeEditted) => {
        res.render('edit.ejs', {
            clientTobeEdited : toBeEditted
        })
    })
    .catch((err) => {
        res.status(403).send("There is no such Client")
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