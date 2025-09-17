import saveSubjects from "@/actions/saveSubjects";
import { authMidlvare } from "@/service/jwt";
import { connectToDatabase } from "@/mongoose/mongooseConnect";

export default async function SaveSubjectsHendler(req, res) {
  if (req.method === "PATCH") {
    try {
      await connectToDatabase();
      await authMidlvare(req, res);
      const student = await saveSubjects(req.student._id, req.body.subjects);
      res.status(200).json(student);
    } catch (err) {
      res.status(err.status).json({ message: err.message });
    }
  } else {
    res.status(404).end();
  }
}
