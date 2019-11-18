let appConfig = {};

  appConfig.db = {
    uri: 'mongodb://admin:admin@192.168.43.68/item_catalog'
    //uri:'mongo "mongodb+srv://cluster0-8fftd.mongodb.net/test" --username a'
    } 

module.exports = {
    db :appConfig.db,
    jwtSecret: 'retailstoresmanagement'
};
