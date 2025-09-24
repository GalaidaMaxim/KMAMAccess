import Student from "@/models/Student";
import createError from "../service/createError";
import { createToken } from "../service/jwt";

export default async (ticketCode) => {
  if (ticketCode === "") {
    throw createError(400, "No such student");
  }
  const student = await Student.findOne({
    ticketCode,
    status: "навчається",
  });
  if (!student) {
    throw createError(400, "No such student");
  }

  const token = createToken(student._id);
  student.token = token;
  await student.save();
  return { student, educationPlan };
};
