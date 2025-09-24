import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  sername: {
    type: String,
    require: true,
  },
  login: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  premissions: {
    type: String,
    enum: ["user", "admin", "teacher"],
    default: "user",
  },
  lastLoginTime: {
    type: Number,
    default: 0,
  },
  lastLogoutTime: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
  tocken: {
    type: String,
  },
});

export default models.user || model("user", UserSchema);
