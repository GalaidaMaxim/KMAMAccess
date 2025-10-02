import JWT from "jsonwebtoken";
import createError from "../service/createError";
import User from "@/models/User";
import EducationPlan from "@/models/EducationPlan";

const secret = "GLIERA";

export const createToken = (_id) => {
  const token = JWT.sign({ _id }, secret);
  return token;
};

export const authMidlvare = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw "err";
    }
    const token = authorization.split(" ")[1];
    const data = JWT.verify(token, secret);
    if (!data._id) {
      throw "err";
    }
    const user = await User.findById(data._id);
    if (!user) {
      throw "err";
    }
    if (user.token !== token) {
      throw "err";
    }
    req.user = user;
  } catch (err) {
    throw createError(403, "Auth error");
  }
};
