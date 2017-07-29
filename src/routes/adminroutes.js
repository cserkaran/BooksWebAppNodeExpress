var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [{
        title: 'War and Peace',
        author: 'Lev'
    }, {
        title: 'Les Miserables',
        author: 'Victor Hugo'
    },
    {
        title: 'Mein Kampf',
        author: 'Adolf Hitler'
    },
    {
        title: 'Satyagraha',
        author: 'Ritu Sen'
    },
    {
        title: 'CLR via C#',
        author: 'Ritcher'
    },
    {
        title: 'WCF Programming',
        author: 'Jouly'
    }
];

var router = function(nav) {

    adminRouter.route('/addBooks')
        .get(function(req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });
    return adminRouter;
};

module.exports = router;