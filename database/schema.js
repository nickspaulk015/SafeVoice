// MongoDB schema structure
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    type: String,
    location: String,
    description: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', reportSchema);