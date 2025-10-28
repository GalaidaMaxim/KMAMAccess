import { connectToDatabase } from "@/mongoose/mongooseConnect";
import { authMidlvare } from "@/service/jwt";
import updateStudentSubject from "@/actions/updateStudentSubject";

export default async function Hedler(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
    const { id, subject } = req.body;

    const student = await updateStudentSubject(id, subject._id, subject);

    res.status(200).json(123);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
