const ReferenceSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    _extends: BaseModel,
    weight: { type: mongoose.Schema.Types.Float },
    size: { type: String, required: true },
    suggestedPrice: { type: mongoose.Schema.Types.Decimal, required: true },
    brand: { type: String, required: false },
    color: { type: mongoose.Schema.Types.ObjectId, ref: "ColorType" }
});

module.exports = ReferenceSchema;