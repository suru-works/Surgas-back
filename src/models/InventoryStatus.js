const InventoryStatusSchema = new mongoose.Schema({
    name: { type: String, required: true },
});
const InventoryStatus = new mongoose.Schema({
    _extends: TypeModel,
});

module.exports = InventoryStatus;