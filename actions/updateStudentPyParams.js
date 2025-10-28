import Student from "@/models/Student";
import createError from "../service/createError";

export default async (id, params) => {
  const student = await Student.findByIdAndUpdate(id, params);
  return student;
};
