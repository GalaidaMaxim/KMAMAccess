import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";

export default async function StudentsHandler(req, res) {
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
    res.status(200).json(req.student);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
