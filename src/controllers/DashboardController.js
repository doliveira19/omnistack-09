const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id }); // busca no banco de dados onde o 'user' for igual ao passado no parametro 'user_id' do header da requisição

        return res.json(spots);
    }
}