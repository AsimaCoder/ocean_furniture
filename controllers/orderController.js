const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
//
        const { userId, products } = req.body;
        const order = new Order({
            userId,
            products,
//
        });
        await order.save();
        res.status(201).send({ message: "Order created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
    }
};
