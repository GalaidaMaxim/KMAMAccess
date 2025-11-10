import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";
import getStatmentByID from "@/actions/getStatmentByID";
import patchStatment from "@/actions/patchStatment";

export default async function StatmentsIDHandler(req, res) {
  try {
    await connectToDatabase();
    if (req.method === "GET") {
      await authMidlvare(req, res);
      const statment = await getStatmentByID(req.query.id);
      res.status(200).json(statment);
    } else if (req.method === "PATCH") {
      await authMidlvare(req, res);
      console.log(req.body);

      const statment = await patchStatment(req.query.id, req.body);

      res.status(200).json(statment);
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
