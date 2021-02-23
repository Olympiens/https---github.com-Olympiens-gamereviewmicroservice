const express = require('express');
const app = express();
var path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

var sessions = require('client-sessions');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


const routes = require('./api/routes');

app.use(sessions({
   cookieName: 'sessionId', // cookie name dictates the key name added to the request object
   secret: 'blargadeeblargblarg', // should be a large unguessable string
   duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
   activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
 }));

routes(app);

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});


var appDir = path.dirname(require.main.filename);

app.get('/', function(request, response){
   response.sendFile(appDir+'/index.html');
});

