import User from "@/models/User";
import createError from "../service/createError";

export default async (id) => {
  const user = await User.findByIdAndUpdate(id, { token: "" });
  if (!user) {
    throw createError(400, "No such student");
  }
  return user;
};
