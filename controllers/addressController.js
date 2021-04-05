const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Travelgroup = require('../models/Travelgroup');
const Travelplan = require('../models/Travelplan');
const User = require('../models/User');
const Address = require('../models/Address');
const Comment = require('../models/Comment');
const mongoose = require('mongoose');



//@desc Get all addresses from a travelplan with planId
//@route GET /api/v1/travelplan/read/address/:planId
//@access Private
exports.getAddressesOfTravelplan = asyncHandler(async (req, res, next) => {
    const addresses = await Address.find({ travelplan: req.params.planId });
    if (!addresses) {
        return next(
            new ErrorResponse(
                `No addresses found of a travelplan with planId ${req.params.planId}`,
                404
            )
        )
    }
    res.status(200).json({
        success: true,
        count: addresses.length,
        data: addresses
    })
});



//@desc Update addresses from a travelplan with planId
//@route GET /api/v1/travelplan/update/address/:addressId
//@access Private
exports.updateAddress = asyncHandler(async (req, res, next) => {
    let address = await Address.findById(req.params.addressId);
    if (!address) {
        return next(
            new ErrorResponse(
                `No address with addressId ${req.params.addressId} found`,
                404
            )
        )
    }
    address = await Address.findByIdAndUpdate(req.params.addressId, req.body, {
        new: true,
        runValidators: true
    });

    address.save();
    res.status(200).json({
        success: true,
        data: address
    })

});

//@desc Delete addresses from a travelplan with planId
//@route DELETE /api/v1/travelplan/delete/address/:addressId
//@access Private

exports.deleteAddress = asyncHandler(async (req, res, next) => {
    const address = await Address.findById(req.params.addressId);
    if (!address) {
        return next(
            new ErrorResponse(
                `No address with addressId ${req.params.addressId} found`,
                404
            )
        )
    }

    await Address.findByIdAndDelete(req.params.addressId);
    res.status(200).json({
        success: true,
        message:'Address is deleted'
    })
})






