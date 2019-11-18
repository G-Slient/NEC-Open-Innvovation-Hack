const mongoDbService = require('./mongodbservice')
const bodyParser = require('body-parser')
var cors = require('cors')

exports.getDataOperation = (app) => {

    app.get('/retrieve1', bodyParser.json(), (request, response) => {
        //console.log(request.originalUrl);
        console.log("Store_1")
        var id=request.originalUrl.split("=")[1];
        console.log(id);
        mongoDbService.store_1.find({item_id:id})
            
            .then(val => {
                console.log(val);
                response.json(val);

            }).catch(err => {
                console.error("retrieveretrieve operation in errr"+err);
            })

    });

    app.get('/retrieve2', bodyParser.json(), (request, response) => {
        //console.log(request.originalUrl);
        console.log("Store_2")
        var id=request.originalUrl.split("=")[1];
        console.log(id);
        mongoDbService.store_2.find({item_id:id})
            
            .then(val => {
                console.log(val);
                response.json(val);

            }).catch(err => {
                console.error("retrieveretrieve operation in errr"+err);
            })

    });

    app.get('/retrieve3', bodyParser.json(), (request, response) => {
        //console.log(request.originalUrl);
        var id=request.originalUrl.split("=")[1];
        console.log(id);
        mongoDbService.store_3.find({item_id:id})
            
            .then(val => {
                console.log(val);
                response.json(val);

            }).catch(err => {
                console.error("retrieveretrieve operation in errr"+err);
            })

    });

    app.get('/retrieve4', bodyParser.json(), (request, response) => {
        //console.log(request.originalUrl);
        var id=request.originalUrl.split("=")[1];
        console.log(id);
        mongoDbService.store_4.find({item_id:id})
            
            .then(val => {
                console.log(val);
                response.json(val);

            }).catch(err => {
                console.error("retrieveretrieve operation in errr"+err);
            })

    });

    app.get('/retrieve5', bodyParser.json(), (request, response) => {
        //console.log(request.originalUrl);
        var id=request.originalUrl.split("=")[1];
        console.log(id);
        mongoDbService.store_5.find({item_id:id})
            
            .then(val => {
                console.log(val);
                response.json(val);

            }).catch(err => {
                console.error("retrieveretrieve operation in errr"+err);
            })

    });
    
}
