const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cartItems: [
    {
      OffersNo: String,
      DescriptionOffre: String,
      cartQuantity: Number,
      // Add other fields from your cart item model
    },
  ],
  done: {
    type: Boolean,
    default: false,
  },
  userInformation: {
    fullName: String,
    address: String,
    phoneNumber: String,
    location: String,
  },
  discountCode: String,
  totalAmount: Number,
  // Add any other fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
