const TypeModel = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: false, required: true},    
    _extends: BaseModel,
    displayName: { type: Object },
    description: { type: Object },
});

module.exports = TypeModel;