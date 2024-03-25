import { mongoose } from 'mongoose'

const carLocationSchema = new mongoose.Schema({
    locationName: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
  });
  
const CarLocation = mongoose.model('CarLocation', carLocationSchema);
  
export default CarLocation

/*  Future Development

const mongoose = require('mongoose');

const carLocationSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true
  },
  coordinates: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  note: String,
  photoUrl: String,
  status: {
    type: String,
    default: 'Parked'
  }
});

const CarLocation = mongoose.model('CarLocation', carLocationSchema);

module.exports = CarLocation;


*/
