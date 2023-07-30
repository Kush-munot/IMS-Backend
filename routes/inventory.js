const express = require('express')
const router = express.Router()
const Inventory = require('../model/inventory_model')

router.get('/', async (req, res) => {
    try {
        const inv = await Inventory.find()
        res.json(inv)
    } catch (err) {
        console.log(err);
    }
})
router.get('/:id', async (req, res) => {
    try {
        const invid = await Inventory.findById(req.params.id)
        res.json(invid)
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    const inv = new Inventory({
        id: req.body.id,
        itemName: req.body.itemName,
        price: req.body.price,
        quantity: req.body.quantity,
        vendorName: req.body.vendorName,
        category: req.body.category
    })

    try {
        const a1 = await inv.save()
        res.json(a1)
    } catch (err) {
        console.log(err);
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const invs = await Inventory.findById(req.params.id)
        invs.itemName = req.body.itemName
        invs.price = req.body.price
        invs.category = req.body.category
        invs.quantity = req.body.quantity
        invs.vendorName = req.body.vendorName
        const a2 = await invs.save()
        res.json(a2)
    } catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const inv = await Inventory.findById(req.params.id)
        const a2 = await inv.deleteOne()
        res.json(a2)
    } catch (err) {
        console.log(err);
    }
})
module.exports = router