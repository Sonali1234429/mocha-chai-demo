const CandidateController = require('./candidate.controller');
const Joi = require('joi');
module.exports = [
  {
    method: 'GET',
    path: '/api/candidates',
    options: {
      handler: CandidateController.find,
      tags: ['api'],
      description: 'Find all candidates',
      notes: 'Returns all Candidates',
    },
  },
  {
    method: 'POST',
    path: '/api/candidates',
    options: {
      validate: {
        payload: Joi.object({
          first_name: Joi.string().required(),
          last_name: Joi.string().required(),
          email: Joi.string().required(),
          company: Joi.string().required(),
        }),
      },
      handler: CandidateController.create,
      tags: ['api'],
      description: 'Create new candidate',
      notes: 'Returns newly created Candidate',
    },
  },
];
