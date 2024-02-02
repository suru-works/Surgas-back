const ProductSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    _extends: BaseModel,
    name: { type: String, required: false },
    description: { type: String, required: false },
    references: { type: [mongoose.Schema.Types.ObjectId], ref: "Reference" },
});

module.exports = ProductSchema;