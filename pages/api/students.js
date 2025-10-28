import updateStudentPyParams from "@/actions/updateStudentPyParams";
import { connectToDatabase } from "@/mongoose/mongooseConnect";
import { authMidlvare } from "@/service/jwt";

export default async function Hedler(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    await connectToDatabase();
    await authMidlvare(req, res);
    const { id, params } = req.body;
    console.log(id, params);

    // const student = await updateStudentPyParams(id, params);

    res.status(200).json("123");
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
