module.exports = class Sanitizer {
  static sanitize(formData) {
    let sanitized = {};
    for (let [field, value] of Object.entries(formData)) {
      sanitized[field] = Sanitizer.htmlEntities(value);
    }
    return sanitized;
  }

  static htmlEntities(val) {
    val = String(val);
    val = val.toLowerCase();
    return val.replace(/</g, '').replace(/>/g, '');
  }
};
