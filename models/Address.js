const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');
const ErrorResponse = require('../utils/errorResponse');

const addressSchema = new mongoose.Schema({
    placeId : String,
    address: {
        type: String,
        trim: true
    },
    location: {
        //GeoJSON Point
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    travelPlan: {
        type: mongoose.Schema.ObjectId,
        ref: 'Travelgroup'
    },
    addressType: {
        type: String,
        enum: ['Destination', 'Departure']
    }

},
{timestamps: true});


// Geocode & create location field
addressSchema.pre('save', async function (next) {
    const loc = await geocoder.geocode(this.address);
    if (loc) {
        this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetName,
        city: loc[0].city,
        state: loc[0].stateCode,
        zipcode: loc[0].zipcode,
        country: loc[0].countryCode
        }
    } 
    next();
});

module.exports = mongoose.model('Address', addressSchema);