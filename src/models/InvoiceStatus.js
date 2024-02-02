const InvoiceStatusSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

module.exports = InvoiceStatusSchema;