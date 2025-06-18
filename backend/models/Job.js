const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: {
    type: String,
    enum: ['Applied', 'Interviewing', 'Offered', 'Rejected'],
    default: 'Applied'
  },
  appliedDate: Date
});

module.exports = mongoose.model('Job', jobSchema);
