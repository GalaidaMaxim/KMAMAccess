import Student from "@/models/Student";
import EducationPlan from "@/models/EducationPlan";
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
  const educationPlan = await EducationPlan.findById(student.educationPlan);
  if (!student) {
    throw createError(400, "No such student");
  }

  const token = createToken(student._id);
  student.token = token;
  await student.save();
  return { student, educationPlan };
};
