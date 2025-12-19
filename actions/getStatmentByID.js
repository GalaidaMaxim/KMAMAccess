import Statment from "@/models/Statment";
import createError from "@/service/createError";
import Department from "@/models/Department";
import Subject from "@/models/Subject";
import EducationPlan from "@/models/EducationPlan";
import Student from "@/models/Student";

export default async (id) => {
  try {
    const statments = await Statment.findById(id)
      .populate("department")
      .populate("subject")
      .populate("educationPlan");

    if (!statments) {
      throw createError(400, "No such statment");
    }

    const students = await Student.find({
      level: statments.educationPlan.level,
      department: statments.department._id,
      educationPlan: statments.educationPlan._id,
      course: statments.course,
      foreigner: statments.foreigner,
      status: "навчається",
      "subjects._id": statments.subject._id,
    }).sort({ sername: 1 });

    return { ...statments._doc, students };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
