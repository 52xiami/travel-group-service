const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Travelgroup = require('../models/Travelgroup');
const Travelplan = require('../models/Travelplan');
const User = require('../models/User');
const Address = require('../models/Address');
const Comment = require('../models/Comment');
const mongoose = require('mongoose');


//@desc Get all comments of a travelPlan with planId
//@route GET /api/v1/travelplan/read/comment
//@access Private
