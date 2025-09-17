import { connectToDatabase } from "@/mongoose/mongooseConnect";
import getEducationPlan from "@/actions/getEducationPlan";
export default async function StudentsHandler(req, res) {
  try {
    await connectToDatabase();
    const plan = await getEducationPlan(req.query.id);
    res.status(200).json(plan);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
