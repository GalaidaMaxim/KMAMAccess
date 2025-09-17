import getAppState from "@/actions/getAppState";
import { connectToDatabase } from "@/mongoose/mongooseConnect";
export default async function Hedler(req, res) {
  try {
    await connectToDatabase();
    const result = await getAppState();
    res.status(200).json(result);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
