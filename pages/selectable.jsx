import { useStudent } from "../redux/selectors";
import { ContainerCustom } from "../components/Container/Container";
import { StudentHead } from "../components/StudentHead/StudentHead";
import { Outlet } from "@/components/Outlet/Outlet";
import { useEffect, useState } from "react";
import { getToken } from "@/service/storage";
import { useRouter } from "next/router";
import { getSubjectsByPlan, getEducationPlan } from "@/service/api";
import { useDispatch } from "react-redux";
import { enableLoading, disableLoading } from "@/redux/slises";
import { saveSubjects } from "@/service/api";
import { useAppSatate } from "../redux/selectors";

import { Box, Paper, Typography, Button } from "@mui/material";
import { SelectableSubjectTable } from "@/components/SelectableSubjectTable/SelectableSubjectTable";

export default function Selectable() {
  const router = useRouter();
  const student = useStudent();
  const [planSubjects, setPlanSubjects] = useState([]);
  const [plan, setPlan] = useState({});
  const [fload, setfload] = useState(false);

  const dispatch = useDispatch();
  const appState = useAppSatate();

  useEffect(() => {
    console.log("useEffect triggered", { student, fload });
    if (!student && !getToken()) {
      router.push("/");
      return;
    }
    if (fload) {
      return;
    }
    (async () => {
      const planSubjects = await getSubjectsByPlan(getToken());
      setPlanSubjects(planSubjects);
    })();

    if (!student || !student.educationPlan) {
      return;
    }
  }, [student, router, setPlan, fload]);

  useEffect(() => {
    if (!appState) {
      return;
    }
    if (!(appState && appState.openForSelectSubject)) {
      router.push("/");
      return;
    }
  }, []);

  const credits = student
    ? student.subjects.reduce((acc, item) => {
        return acc + item.credits;
      }, 0)
    : 0;

  const onSave = async () => {
    try {
      dispatch(enableLoading());
      await saveSubjects(getToken(), student.subjects);
    } catch (err) {
      console.log(err);
    }
    dispatch(disableLoading());
  };

  return (
    <Outlet>
      <ContainerCustom>
        {student && (
          <Paper>
            <Box padding={2}>
              <StudentHead student={student} />
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Typography variant="body1">Кредити</Typography>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "40px" }}
                  variant="h3"
                >
                  {credits}
                </Typography>
                <Typography variant="body1">необхідно</Typography>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "40px" }}
                  variant="h3"
                >
                  {student?.educationPlan.credits}
                </Typography>
              </Box>
              <SelectableSubjectTable
                title="Обов'зкові дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "1"
                )}
                studentStudjects={student.subjects}
                disabled
              />
              <SelectableSubjectTable
                title="Профільні дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "2"
                )}
                studentStudjects={student.subjects}
                disabled
              />

              <SelectableSubjectTable
                title="Дисципліни додаткових кваліфікацій"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "3"
                )}
                addSpec
                studentStudjects={student.subjects}
              />
              <SelectableSubjectTable
                title="Вибіркові дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "4"
                )}
                studentStudjects={student.subjects}
              />
              <Box sx={{ marginTop: "20px" }}>
                <Button
                  disabled={credits !== student.educationPlan.credits}
                  onClick={onSave}
                  variant="contained"
                >
                  Зберегти план
                </Button>
              </Box>
            </Box>
          </Paper>
        )}
      </ContainerCustom>
    </Outlet>
  );
}
