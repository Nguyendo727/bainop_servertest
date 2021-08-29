const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dataUser", {});
const user = mongoose.Schema(
  {
    username: String,
    password: String,
    usermail: String,
    NumberPhone: Number,
    address: String,
    Birthday: String,
  },
  { collection: "dataUser" }
);
const UserModel = mongoose.model("test", user);

module.exports = UserModel;
