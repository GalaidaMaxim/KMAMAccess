import loginUser from "@/actions/loginUser";
import { connectToDatabase } from "@/mongoose/mongooseConnect";

export default async function AuthHandler(req, res) {
  try {
    await connectToDatabase();
    const { login, password } = req.body;
    const { user } = await loginUser(login, password);
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);

    res.status(err.status || 500).json({ message: err.message });
  }
}
