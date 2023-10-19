const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    fullname: { 
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true,
    },
    termAgree: { 
      type: String,
      required: true,
    },
    password: { 
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = user = mongoose.model("user", userSchema);
