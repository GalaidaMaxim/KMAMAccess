import Student from "@/models/Student";
import createError from "../service/createError";

export default async (id) => {
  const student = await Student.findByIdAndUpdate(id, { token: "" });
  if (!student) {
    throw createError(400, "No such student");
  }
  return student;
};
