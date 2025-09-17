import EducationPlan from "@/models/EducationPlan";
import createError from "../service/createError";

export default async (id) => {
  const plan = await EducationPlan.findById(id);
  if (!plan) {
    throw createError(400, "No such plan");
  }
  return plan;
};
