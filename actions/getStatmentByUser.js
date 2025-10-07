import Statment from "@/models/Statment";
import createError from "@/service/createError";

export default async (userID) => {
  const statments = Statment.find({ users: userID });
  if (!statments) {
    throw createError(400, "No such statments");
  }
  return statments;
};
