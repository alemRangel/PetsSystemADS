const express = require('express');
const router = express.Router();
const {conn,getItems, apiResponse} = require('../services/ServiceEx');
const posts = [

    {
        id: 1,
        author: 'John',
        title: 'Templating with pug',
        body: 'Blog post 1'
    },

    {
        id: 2,
        author: 'Peter',
        title: 'React: Starting from the Bottom',
        body: 'Blog post 2'
    },

    {
        id: 3,
        author: 'Violet',
        title: 'Node.js Streams',
        body: 'Blog post 3'
    },

    {
        id: 4,
        author: 'Condy',
        title: 'Node.js Events',
        body: 'Blog post 4'
    }

]

/* GET home page. */
// Returns a list of posts to the view.
router.get('/', function (req, res, next) {
    response =  getItems();
    res.render('index', {title: 'Express', posts: posts});
});

module.exports = router;