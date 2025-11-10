import Statment from "@/models/Statment";
import createError from "@/service/createError";

export default async (userID) => {
  try {
    const statmentsCount = await Statment.countDocuments({ users: userID });
    if (!statmentsCount) {
      throw createError(400, "No such statments");
    }
    const uncomplitedStatments = await Statment.countDocuments({
      users: userID,
      complited: { $ne: true },
    });
    return { statmentsCount, uncomplitedStatments };
  } catch (err) {
    console.log(err);

    throw err;
  }
};
