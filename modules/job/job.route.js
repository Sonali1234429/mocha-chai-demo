const JobController = require('./job.controller')
const Joi = require('joi');
module.exports = [
    {
        method:'GET',
        path:'/api/jobs',
        options:{
        handler:JobController.find,
        description:'Find all Jobs',
        tags:['api'],
        notes:'Returns all Jobs'
    }
    },
    {
        method:'POST',
        path:'/api/jobs',
        options:{
            handler:JobController.create,
            validate:{
                payload:Joi.object({
                    title:Joi.string().required(),
                    company:Joi.string().required()
                })
            },
        description:'Create new Job',
        tags:['api'],
        notes:'Returns newly created Job'

        

        }
    }
]