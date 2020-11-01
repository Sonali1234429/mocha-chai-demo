const Job = require('./job.model');
//const Company = require('../company/company.model');

module.exports = {
  async find(request, h) {
    try {
      const job = await Job.find()

      return h.response(job);
    } catch (err) {
      return h.response(error).code(500);
    }
  },
  async create(request, h) {
    try {
      const job = new Job(request.payload);
      var result = await job.save();
    //   const _company = await Company.findById(request.payload.company);
    //   _company.jobs.push(job);
    //   await _company.save();
      return h.response(result);
    } catch (err) {
      return h.response(error).code(500);
    }
  },
};
