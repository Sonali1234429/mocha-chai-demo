const CompanyRoutes = require('./company.route');

const CompanyModule = {
  name: 'CompanyModule',
  pkg: require('../../package.json'),
  register: function (server, option) {
    server.route(CompanyRoutes);
  },
};

module.exports = CompanyModule;
