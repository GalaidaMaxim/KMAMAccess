import User from "@/models/User";
import createError from "../service/createError";
import { createToken } from "../service/jwt";
import bcrypt from "bcrypt";

export default async (login, password) => {
  if (login === "" || password === "") {
    throw createError(400, "No such user");
  }
  const user = await User.findOne({ login });
  if (!user) {
    createError(400, "No such user");
  }
  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    throw createError(400, "Wrong password");
  }

  const token = createToken(user._id);
  user.token = token;
  await user.save();
  user.password = undefined;
  return { user };
};
