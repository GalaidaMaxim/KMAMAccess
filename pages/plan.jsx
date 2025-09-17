import { useStudent } from "../redux/selectors";
import { ContainerCustom } from "../components/Container/Container";
import { StudentHead } from "../components/StudentHead/StudentHead";
import { Outlet } from "@/components/Outlet/Outlet";
import { useEffect } from "react";
import { getToken } from "@/service/storage";
import { useRouter } from "next/router";

import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

export default function EducationPlan() {
  const router = useRouter();
  const student = useStudent();
  useEffect(() => {
    if (!student && !getToken()) {
      router.push("/");
    }
  }, [student, router]);

  return (
    <Outlet>
      <ContainerCustom>
        {student && (
          <Paper>
            <Box padding={2}>
              <StudentHead student={student} />
              <Box marginTop={4}>
                <Typography variant="h3">{`Обов'язкові дисципліни`}</Typography>
                <Table>
                  <TableBody>
                    {student.subjects
                      .filter((sub) => sub.code.charAt(0) === "1")
                      .map((subject) => (
                        <TableRow key={subject._id}>
                          <TableCell>{subject.name}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Box>
              <Box marginTop={4}>
                <Typography variant="h3">{`Профільні дисципліни`}</Typography>
                <Table>
                  <TableBody>
                    {student.subjects
                      .filter((sub) => sub.code.charAt(0) === "2")
                      .map((subject) => (
                        <TableRow key={subject._id}>
                          <TableCell>{subject.name}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Box>
              <Box marginTop={4}>
                <Typography variant="h3">{`Дисципліни додаткових кваліфікацій`}</Typography>
                <Table>
                  <TableBody>
                    {student.subjects
                      .filter((sub) => sub.code.charAt(0) === "3")
                      .map((subject) => (
                        <TableRow key={subject._id}>
                          <TableCell>{subject.name}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Box>
              <Box marginTop={4}>
                <Typography variant="h3">{`Вибіркові дисципліни`}</Typography>
                <Table>
                  <TableBody>
                    {student.subjects
                      .filter((sub) => sub.code.charAt(0) === "4")
                      .map((subject) => (
                        <TableRow key={subject._id}>
                          <TableCell>{subject.name}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Paper>
        )}
      </ContainerCustom>
    </Outlet>
  );
}
