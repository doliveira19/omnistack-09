const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    // usuario que está reservando o local
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // model de referencia
    }
});

module.exports = mongoose.model('Spot', SpotSchema);