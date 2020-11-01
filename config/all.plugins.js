const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const userModule = require('../modules/user/user.module');
const MongoosePlugin = require('../plugins/mongoose.plugin');
const ApplicationModule = require('../modules/application/application.module');
const CandidateModule = require('../modules/candidate/candidate.module');
const CompanyModule = require('../modules/company/company.module');
const JobModule = require('../modules/job/job.module');

const swaggerOptions = {
  info: {
    title: 'Test API Documentation',
    version: '0.0.1',
  },
};

module.exports = [
  Inert,
  Vision,
  { plugin: HapiSwagger, options: swaggerOptions },

  userModule,
  MongoosePlugin,
  ApplicationModule,
  CandidateModule,
  CompanyModule,
  JobModule,
];
