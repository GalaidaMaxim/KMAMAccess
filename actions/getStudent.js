import { Students } from "../models";
import createError from "../service/createError";

export default async (id) => {
  const student = await Students.findById(id);
  if (!student) {
    throw createError(400, "No such student");
  }
  return student;
};
