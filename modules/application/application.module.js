const applicationRoute = require('./application.route');

const ApplicationModule = {
  name: 'ApplicationModule',
  pkg: require('../../package.json'),
  register: async (server, options) => {
    server.route(applicationRoute);
  },
};

module.exports = ApplicationModule;
