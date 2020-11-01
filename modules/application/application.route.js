const ApplicationController = require('./application.controller');

const Joi = require('joi');
module.exports = [
  {
    method: 'GET',
    path: '/api/applications',
    options: {
      handler: ApplicationController.find,
      tags: ['api'],
      description: 'Returns all applications',
      notes: 'Returns all existed applications',
    },
  },
  {
    method: 'POST',
    path: '/api/applications',
    options: {
      handler: ApplicationController.create,
      validate: {
        payload: Joi.object({
          hired: Joi.boolean(),
          job: Joi.string().required(),
          candidate: Joi.string().required(),
        }),
      },
      tags: ['api'],
      description: 'Create application',
      notes: 'Returns Created application',
    },
  },
];