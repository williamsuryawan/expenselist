const Article = require('../models/petarticle')

class articleController {
    static getAllList (req,res, next) {
        Article
            .find({})
            .then(articlelist => {
                res.status(200).json(articlelist)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createList (req,res,next) {
        Article
            .create({
                name: req.body.name,
                description: req.body.description,
                link: req.body.link,
                date: new Date()
            })
            .then(newList => {
                res.status(200).json(newList)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = articleController;