const OrderStatusSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

module.exports = OrderStatusSchema;