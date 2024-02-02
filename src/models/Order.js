const OrderSchema = new mongoose.Schema({
    consecutive: { type: Number, required: true },
    status: { type: String, required: true },
    products: { type: [ProductSchema], required: true },
    invoice: { type: mongoose.Schema.Types.ObjectId, ref: "Invoice" },
});

module.exports = OrderSchema;