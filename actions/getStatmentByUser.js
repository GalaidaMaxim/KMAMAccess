import Statment from "@/models/Statment";
import createError from "@/service/createError";
import Department from "@/models/Department";
import Subject from "@/models/Subject";
import EducationPlan from "@/models/EducationPlan";

export default async (userID) => {
  try {
    const statments = await Statment.find({ users: userID })
      .populate("department")
      .populate("subject")
      .populate("educationPlan");

    if (!statments) {
      throw createError(400, "No such statments");
    }
    return statments;
  } catch (err) {
    console.log(err);

    throw err;
  }
};
