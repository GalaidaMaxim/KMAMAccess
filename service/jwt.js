import JWT from "jsonwebtoken";
import createError from "../service/createError";
import Student from "@/models/Student";
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
    const student = await Student.findById(data._id);
    if (!student) {
      throw "err";
    }
    if (student.token !== token) {
      throw "err";
    }
    const educationPlan = await EducationPlan.findById(student.educationPlan);
    student.educationPlan = educationPlan;
    req.student = student;
  } catch (err) {
    throw createError(403, "Auth error");
  }
};
