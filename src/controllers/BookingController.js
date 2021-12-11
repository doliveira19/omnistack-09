const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        // resgata os valores
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;
        
        // grava no banco de dados
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        });

        // insere as referencias do spot e do user na booking
        await booking.populate('spot').populate('user').execPopulate();

        // retorna a informação para o view
        return res.json(booking);
    }
}