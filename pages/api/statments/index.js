import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";

export default async function UsersHandler(req, res) {
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
