import { Schema, model, models } from "mongoose";

const Department = new Schema({
  name: {
    type: Schema.Types.String,
  },
  level: {
    type: Schema.Types.String,
  },
  fullName: {
    type: Schema.Types.String,
    default: "",
  },
});

export default models.department || model("department", Department);
