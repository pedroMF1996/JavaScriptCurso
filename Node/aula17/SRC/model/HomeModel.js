const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: {type: String}
});

const HomeModel = mongoose.model('Home', homeSchema);


class Home {

};

module.exports = Home;