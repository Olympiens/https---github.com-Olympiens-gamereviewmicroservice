'use strict';

const controller = require('./controller');


module.exports = function(app){
    app.get('/getlast15reviews', controller.getlast15reviews);
    app.post('/feedback/:sessionId',controller.feedback);
}