import { Schema, model, models } from "mongoose";
const VersionSchema = new Schema({
  current: {
    type: String,
    require: true,
  },
});

export default models.version || model("version", VersionSchema);
