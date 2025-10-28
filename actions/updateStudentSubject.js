import Student from "@/models/Student";

export default async (studentId, subjectID, updatedSubject) => {
  const student = await Student.findOneAndUpdate(
    { _id: studentId, "subjects._id": subjectID },
    {
      $set: {
        "subjects.$": updatedSubject,
      },
    },
    { new: true } // вернёт обновлённый документ
  );
  return {};
};
