const Joi = require('joi');
const Application = require('./application.model');

module.exports = {
  async find(request, h) {
    try {
      var application = await Application.find()
       
      return h.response(application);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
  async create(request, h) {
    try {
      const application = new Application(request.payload);
      const result = await application.save();
      return h.response(result);
    } catch (err) {
      return h.response(error).code(500);
    }
  },
};
