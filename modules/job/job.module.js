

const jobRoute = require('./job.route')

const JobModule = {
    name:'JobModule',
    pkg:require('../../package.json'),
    register:async (server,options)=>{
        server.route(jobRoute)
    }
}

module.exports = JobModule;