import State from "../models/State";
import createError from "@/service/createError";

export default async () => {
  const result = await State.find();
  if (!result) {
    throw createError(400, "No such plan");
  }
  return result[0];
};
