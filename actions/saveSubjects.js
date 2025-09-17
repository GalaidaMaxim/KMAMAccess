import Student from "@/models/Student";
import createError from "../service/createError";

export default async (id, subjects) => {
  const student = await Student.findById(id);
  if (!student) {
    createError(400, "User error");
  }
  student.subjects = subjects;
  await student.save();
  return student;
};
