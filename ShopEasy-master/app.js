const express = require('express')
var http = require('http');
const app = express()
const port = 8008;
const path = require('path')
const mongoDbService=require('./backendservice/mongodbservice')
mongoDbService.connectMongoDb();
var cors = require('cors')

app.use(express.static(__dirname+'/www'));
//app.use(express.static(path.join(__dirname+'/public')));
/*app.get('/', (req, res) => res.send('Welcome To Code Handbook!'))*/

/*
* Route to render HTML Page
*/

http.createServer(app).listen(port);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/www/index.html'));
})

const itemretrive =require('./backendservice/list');

itemretrive.getDataOperation(app);



//app.listen(port, () => console.log(`App listening on port ${port}!`))


