const WarehouseSchema = new mongoose.Schema({
    code: { type: String, required: true },
    location: { type: String },
});

module.exports = WarehouseSchema;