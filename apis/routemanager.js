var express =require('express');
var app = express();

function routeManagerToApi(app){
    
    // masters
    app.use('/user', require('./controllers/userModule').logic);
    app.use('/signup', require('./controllers/signup').logic);



}

/**@description Default module export from this class */
module.exports = routeManagerToApi;