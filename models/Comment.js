const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        require: [true, 'Please add a title for the comment'],
        maxLength: [100, 'Title can not be more than 100 characters']
    },
    text: {
        type: String,
        trim: true,
        require: [true, 'Please add a title for the comment'],
        maxLength: [300, 'Title can not be more than 300 characters']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, 'Please add a rating between 1 and 5']
    },
    travelPlan: {
        type: mongoose.Schema.ObjectId,
        ref: 'Travelplan',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        require: true
    }
},
    {
    timestamps: true
});

// Prevent user from submitting more than one comment per travelplan
commentSchema.index({ travelPlan: 1, user: 1 }, { unique: true });



module.exports = mongoose.model('Comment', commentSchema);

