const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    car_maker: String,
    car_model: String,
    year: String,
    vin: String,
    defects: Boolean
})

module.exports = mongoose.model('Cars', CarSchema)