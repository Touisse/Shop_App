const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone:{ type: Number, required: true },
    address:{ type: String, required: true },
    gender:{ type: String, required: true },
    img:{type:String},
    isAdmin: {
      type: Boolean,
      default: false,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
