import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";
import logoustUser from "@/actions/logoutUser";

export default async function LogoutHandler(req, res) {
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
    const user = await logoustUser(req.user._id);
    res.status(200).json(req.user);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
