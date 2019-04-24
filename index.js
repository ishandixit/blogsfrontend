const express = require('express'),
          app = express(),
         path = require('path')
         template = require('./src/template')
         device = require('express-device')
         cors = require('cors')
         bodyParser = require('body-parser')
         cookieParser = require('cookie-parser')
         compression = require('compression')
         fs = require('fs');

var mongoose = require('mongoose');
var routeManagerToApi = require('./apis/routemanager.js');


const httpsOptions = {
          key: fs.readFileSync('./security/cert.key'),
          cert: fs.readFileSync('./security/cert.pem')
      }
      
var http = require('http').createServer(app);


/* middlewares */
app.use(device.capture());
app.use(cors());
app.use(bodyParser.json({
    extended: true,
    limit: '5000mb',
    parameterLimit: 500000
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50000mb',
    parameterLimit: 500000
})); 
app.use(cookieParser());
app.use(compression());


// hide powered by express
app.disable('x-powered-by');
// start the server
const port = 80;
http.listen(process.env.PORT || port);
console.log("running on port :::",port)



mongoose.connect("mongodb://isham619:isham619@ds147125.mlab.com:47125/ishamblogs",{ useNewUrlParser: true } );

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + "mongodb://isham619:isham619@ds147125.mlab.com:47125/ishamblogs");
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});
 
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

//SSR function import

/*router controllers */
routeManagerToApi(app);


// server rendered home page
app.get('*', (req, res) => {
    var originalUrlArray = req.originalUrl.split("/");
    var arrLength = originalUrlArray.length;
 
    var ext = originalUrlArray[originalUrlArray.length - 1].split('.');



    if (ext.length == 1) {                
        const response = template("Expanding Horizons")
        res.send(response);
    } else if (originalUrlArray.length > 2 && originalUrlArray[originalUrlArray.length - 3] == 'static') {
        res.sendFile(path.join(__dirname, './public/' + originalUrlArray[arrLength - 1]));
    } else {
        res.sendFile(path.join(__dirname, './public/' + originalUrlArray[arrLength - 2] + '/' + originalUrlArray[arrLength - 1]));

    }

    
});
