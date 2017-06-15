const Waterline = require('waterline')
const config = require('../config')

// Define your collection (aka model) 
module.exports = Waterline.Collection.extend(Object.assign(config, {

    tableName: 'crawl',

    identity: 'crawl',

    attributes: {

        store: {
            type: 'objectid'
        },

        category: {
            type: 'objectid'
        },

        subcategory: {
            type: 'objectid'
        },

        message: {
            type: 'string'
        },

        job: {
            type: 'string',
            enum: ['cron', 'human'],
            defaultsTo: 'human'
        },

        status: {
            type: 'string',
            enum: ['pending', 'running', 'done'],
            defaultsTo: 'pending'
        },

        time: {
            type: 'datetime',
            required: true
        }

    }
}))