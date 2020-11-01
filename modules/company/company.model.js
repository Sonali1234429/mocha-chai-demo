// import the mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//crate the schema
const companySchema = new Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    candidates: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
      },
    ],
    jobs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Job',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Company', companySchema);
