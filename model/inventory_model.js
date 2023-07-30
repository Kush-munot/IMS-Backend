const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    id: {
        type:Number
    },
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    vendorName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Inventory', inventorySchema)