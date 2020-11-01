const Candidate = require('./candidate.model');
const Company = require('../company/company.model');

module.exports = {
  async find(request, h) {
    try {
      var candidate = await Candidate.find().populate('company');
      return h.response(candidate);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
  async create(request, h) {
    try {
      const candidate = new Candidate(request.payload);
      var result = await candidate.save();
      const _company = await Company.findById(request.payload.company);
      _company.candidates.push(candidate);
      await _company.save();
      return h.response(result);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
};
