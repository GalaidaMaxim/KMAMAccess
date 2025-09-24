import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";
import logoutStudent from "@/actions/logoutStudent";

export default async function LogoutHandler(req, res) {
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
    const student = await logoutStudent(req.student._id);
    res.status(200).json(student);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
