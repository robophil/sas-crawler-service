const cote = require('cote')

const crawlResponder = new cote.Responder({
    name: 'SAS-CRAWL-SERVICE: crud-responder ',
    namespace: '',
    respondsTo: ['crawl.create', 'crawl.update', 'crawl.get', 'crawl.delete']
})

/**
 * Responder: {model, body}
 * Create a crawl. req.body eg {name: 'foo'} is the object to be created
 */
crawlResponder.on('crawl.create', (req) => {
    switch (req.model) {
        case "crawl": return Crawl.create(req.body)

        default: return null
    }
})

/**
 * Responder: {model, body}
 * Update a crawl. req.query is an object eg {id: 1}, req.body eg {name: 'foo'} is the object to be updated
 */
crawlResponder.on('crawl.update', (req) => {
    switch (req.model) {
        case "crawl": return Crawl.update(req.query, req.body)

        default: return null
    }
})

/**
 * Responder: {model, query}
 * Gets a crawl. req.query is an object eg {id: 1}
 */
crawlResponder.on('crawl.get', (req) => {
    switch (req.model) {
        case "crawl": return Crawl.get(req.query)

        default: return null
    }
})

/**
 * Responder: {model, query}
 * Deletes a crawl. req.query is an object eg {id: 1}
 */
crawlResponder.on('crawl.delete', (req) => {
    switch (req.model) {
        case "crawl": return Crawl.delete(req.query)

        default: return null
    }
})