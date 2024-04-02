// routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Endpoint to create a new order
router.post('/create-order', async (req, res) => {
  try {
    const { cartItems, userInformation, discountCode, totalAmount } = req.body;

    const newOrder = new Order({
      cartItems,
      userInformation,
      discountCode,
      totalAmount,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order created successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while creating the order.' });
  }
});

// Endpoint to get all orders
router.get('/get-orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching orders.' });
  }
});

// Endpoint to mark an order as done
router.patch('/mark-as-done/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: { done: true } },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    res.status(200).json({ message: 'Order marked as done successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while marking the order as done.' });
  }
});

module.exports = router;
