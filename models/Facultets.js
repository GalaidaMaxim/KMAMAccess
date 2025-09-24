import { Schema, model, models } from "mongoose";

const Facultet = new Schema({
  name: String,
});

export default models.facult || model("facultet", Facultet);
