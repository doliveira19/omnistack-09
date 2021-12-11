const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // model de referencia
    },
    // usuario que está reservando o local
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot' // model de referencia
    }
});

module.exports = mongoose.model('Booking', BookingSchema);