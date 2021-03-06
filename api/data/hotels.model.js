var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  name        : {
    type      : String,
    required  : true
  },
  review      : {
    type      : String,
    required  : true
  },
  rating      : {
    type      : Number,
    required  : true,
    min       : 0,
    max       : 5
  },
  createdOn   : {
    type      : Date,
    "default" : Date.now
  }
});

var roomSchema = new mongoose.Schema({
  type        :  String,
  number      :  Number,
  description :  String,
  photos      : [String],
  price       :  Number
});

var hotelSchema = new mongoose.Schema({
  name        : {
  type        : String,
  required    : true
  },
  stars       : {
    type      : Number,
    min       : 0,
    max       : 5,
    default   : 0
  },
  description :  String,
  photos      : [String],
  currency    :  String,
  rooms       : [roomSchema],
  reviews     : [reviewSchema]
});

mongoose.model('Hotel', hotelSchema);
