import Subject from "@/models/Subject";

export default async ({ educationPlan, department }) => {
  try {
    const specialSubject = await Subject.Subjects.find({
      educationPlan,
      department,
    });
    const allSubject = await Subject.Subjects.find({
      educationPlan,
      department: null,
    });
    if (!specialSubject || !allSubject) {
      return null;
    }
    const subectsListAll = [...allSubject, ...specialSubject];

    const finalList = [];
    finalList.push(
      ...subectsListAll.filter((item) => item.code.charAt(0) === "1")
    );
    finalList.push(
      ...subectsListAll.filter((item) => item.code.charAt(0) === "2")
    );
    finalList.push(
      ...subectsListAll.filter((item) => item.code.charAt(0) === "3")
    );
    finalList.push(
      ...subectsListAll.filter((item) => item.code.charAt(0) === "4")
    );
    return finalList;
  } catch (err) {
    console.log(err);
    return null;
  }
};
