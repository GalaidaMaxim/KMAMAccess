import signUpStudent from "@/actions/signUpStudent";
import { connectToDatabase } from "@/mongoose/mongooseConnect";

export default async function AuthHandler(req, res) {
  try {
    await connectToDatabase();
    const { ticketCode } = req.body;
    const { student, educationPlan } = await signUpStudent(ticketCode);

    const { token, name, sername, secondName, subjects, course, level } =
      student;

    res.status(200).json({
      token,
      name,
      sername,
      secondName,
      subjects,
      course,
      level,
      educationPlan,
    });
  } catch (err) {
    console.log(err.message);

    res.status(err.status || 500).json({ message: err.message });
  }
}
