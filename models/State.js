import { Schema, model, models } from "mongoose";

const StateSchema = new Schema({
  openForSelectSubject: Boolean,
});

export default models.state || model("state", StateSchema);
