import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";
import getUserStatistic from "@/actions/getUserStatistic";

export default async function GetStatistick(req, res) {
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
    const result = await getUserStatistic(req.user._id);
    res.status(200).json(result);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
