const companyController = require('./company.controller');
const Joi = require('joi');

// const schema = Joi.object({
//   name: Joi.string().required(),
//   city: Joi.string().optional(),
//   address: Joi.string().optional(),
// });
// const schema2 = Joi.object({
//   name: Joi.string().optional(),
//   city: Joi.string().optional(),
//   address: Joi.string().optional(),
// });

module.exports = [
  {
    method: 'POST',
    path: '/api/companies',

    options: {
      validate: {
        payload:  Joi.object({
            name: Joi.string().required(),
            city: Joi.string().required(),
            address: Joi.string().required(),
          })
      },
      handler: companyController.create,
      description: 'Create new company',
      tags: ['api'],
      notes: 'Returns newly created company',
    },
  },
  {
    method: 'GET',
    path: '/api/companies',
    options: {
      handler: companyController.find,
      description: 'get all company',
      tags: ['api'],
      notes: 'Returns all the company',
    },
  },
  {
    method: 'GET',
    path: '/api/companies/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().required(),
        }),
      },
      handler: companyController.findOne,
      description: 'Find one company',
      tags: ['api'],
      notes: 'Returns one company',
    },
  },
  {
    method: 'PUT',
    path: '/api/companies/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().required(),
        }),
        payload: Joi.object({
            name: Joi.string().optional(),
            city: Joi.string().optional(),
            address: Joi.string().optional(),
          })
      },
      handler: companyController.update,
      description: 'Update one Company',
      tags: ['api'],
      notes: 'Update one company',
    },
  },
  {
    method: 'DELETE',
    path: '/api/companies/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().required(),
        }),
      },
      handler: companyController.delete,
      description: 'Delete one company by id',
      tags: ['api'],
      notes: 'Delete one company',
    },
  },
];
