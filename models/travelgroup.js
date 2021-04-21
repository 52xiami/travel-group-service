const mongoose = require("mongoose");
const travelGroupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      require: true,
      trim: true,
      maxLength: [50, "groupName can not be more than 50 characters"],
    },
    groupImage: {
      type: String,
      default: "no-image.jpg",
    },
    groupDescription: {
      type: String,
      trim: true,
      maxLength: [100, "Group description can not be more than 100 characters"],
    },
    groupMembers: {
      type: [Number],
    },
    groupManagers: {
      type: [Number],
    },
    groupOwner: {
      type: Number,
    },
    travelPlans: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Travelgroup", travelGroupSchema);
