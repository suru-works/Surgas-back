const BaseModel = new mongoose.Schema({
    updatedBy: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = BaseModel;