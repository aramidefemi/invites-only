const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    url: {
      type: String,
    },
    phone: {
      type: Number, 
    },
    approved: {
      type: Boolean, 
      default: false
    },
    authenticated: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);
 
module.exports = mongoose.model('User', UserSchema);
