const candidateRoute = require('./candidate.route');

const CandidateModule = {
  name: 'CandidateModule',
  pkg: require('../../package.json'),
  register: (server, options) => {
    server.route(candidateRoute);
  },
};

module.exports = CandidateModule;
