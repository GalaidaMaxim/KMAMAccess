import Statment from "@/models/Statment";
import createError from "@/service/createError";
import Department from "@/models/Department";
import Subject from "@/models/Subject";
import EducationPlan from "@/models/EducationPlan";
import Student from "@/models/Student";

export default async (id, params) => {
  try {
    console.log(id, params);

    const statment = await Statment.findByIdAndUpdate(id, params);
    if (!statment) {
      throw createError(400, "No such statment");
    }
    return { statment };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
