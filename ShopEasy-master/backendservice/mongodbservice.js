const mongoose = require('mongoose');
const appConfig = require('../config/appConfig');

//const shortid = require('shortid');
require('../schema/items');

const assetModel1 = mongoose.model('store_1'); 
const assetModel2 = mongoose.model('store_2')
const assetModel3 = mongoose.model('store_3')
const assetModel4 = mongoose.model('store_4')
const assetModel5 = mongoose.model('store_5')

///mongoDbStart

module.exports.connectMongoDb=function(){

    mongoose.connect(appConfig.db.uri);

    mongoose.connection.on('error', function (err) {
      console.log('database connection error');
      console.log(err)
      //process.exit(1)
    }); // end mongoose connection error
    
    mongoose.connection.on('open', function (err) {
      if (err) {
        console.log("database error");
        console.log(err);
     
      } else {
        console.log("database connection open success");
       
      }
      //process.exit(1)
    });
}

//module.exports.shortId=shortid;
module.exports.store_1=assetModel1;
module.exports.store_2=assetModel2;
module.exports.store_3=assetModel3;
module.exports.store_4=assetModel4;
module.exports.store_5=assetModel5;