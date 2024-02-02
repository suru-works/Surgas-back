const SupplierSchema = new mongoose.Schema({
    _extends: BaseModel,
    name: { type: String, required: true },
    address: { type: AddressSchema },
    contact: { type: String },
});

module.exports = SupplierSchema;