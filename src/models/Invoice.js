const InvoiceSchema = new mongoose.Schema({
    consecutive: { type: Number, required: true },
    estimatedDeliveryDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    deliveryPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = InvoiceSchema;