'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let assetSchema = new Schema({
  id: {
    type: String,
    default: ''
  },
  item_id: {
    type: String,
    default: '',
    index:true,
    unique:true
  },
   name: {
    type: String,
    default: ''
  },
  quantity: {
    type: String,
    default: '',
    
  },
  price: {
    type: String,
    default: '',
  },
  category:{
    type:String,
    default:''
  },
  offer_id: {
    type: String,
    default: ''
  },
  qr_code: {
    type: String,
    default: ''
  }
})


module.exports = mongoose.model('store_1', assetSchema);
module.exports = mongoose.model('store_2', assetSchema);
module.exports = mongoose.model('store_3', assetSchema);
module.exports = mongoose.model('store_4', assetSchema);
module.exports = mongoose.model('store_5', assetSchema);