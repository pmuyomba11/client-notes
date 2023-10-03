const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clientSchema = new Schema({
    name: { type: String },
    date: { type: Date },
    details: { type: String },
    Staff: { type: String }
},
    { timestamps: true }
)

const Client = mongoose.model('Client', clientSchema)

module.exports = Client;