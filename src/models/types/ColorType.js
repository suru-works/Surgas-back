const ColorType = new mongoose.Schema({
    _extends: TypeModel,
    rgbCode: { type: String, required: false },
    exCode: { type: String, required: false },
    hslCode: { type: String, required: false }
});

ColorType.path("exCode").validate({
    pattern: /^[0-9A-Fa-f]{6}$/,
    message: "El código exCode debe ser un valor hexadecimal de 6 dígitos"
});

module.exports = ColorType;