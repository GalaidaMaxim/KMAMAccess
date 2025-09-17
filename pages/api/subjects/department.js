import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";
import getSubjectsByDepartment from "@/actions/getSubjectsByDepartment";

export default async function LogoutHandler(req, res) {
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
    const subjects = await getSubjectsByDepartment({
      educationPlan: req.student.educationPlan,
      department: req.student.department,
    });

    res.status(200).json(subjects);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
