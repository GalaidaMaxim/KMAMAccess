import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";
import getStatmentByID from "@/actions/getStatmentByID";

export default async function StatmentsIDHandler(req, res) {
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
    console.log(req.query);

    const statment = await getStatmentByID(req.query.id);
    res.status(200).json(statment);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
