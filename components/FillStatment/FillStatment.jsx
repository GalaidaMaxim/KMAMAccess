import {
  Box,
  Button,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Checkbox,
} from "@mui/material";

import { updateStudentPyParams } from "@/service/api";
import { getToken } from "@/service/storage";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { enableLoading, disableLoading } from "@/redux/slises";

export const FillStatment = ({
  subject,
  semester,
  students = [],
  setStudentsMark = () => {},
  setStudentRedelivery = () => {},
}) => {
  const dispatch = useDispatch();

  const saveStudent = async (id) => {
    dispatch(enableLoading());
    try {
      await updateStudentPyParams(
        getToken(),
        id,
        students
          .find((item) => item._id === id)
          .subjects.find((item) => item._id === subject._id)
      );
      toast("Студент оновлений", { type: "success" });
    } catch (err) {
      toast("Помилка", { type: "error" });

      console.log(err);
    }
    dispatch(disableLoading());
  };

  const markInputHandle = (id) => {
    return async (event) => {
      const mark = Number.parseInt(event.target.value);
      if (mark != event.target.value && event.target.value !== "") {
        console.log("not a number");
        return;
      }
      await saveStudent(id);
    };
  };

  return (
    <Box>
      <ToastContainer autoClose={1000} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Студент</TableCell>
            <TableCell>Оцінка</TableCell>
            <TableCell>Перездача</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={student._id}>
              <TableCell>{`${student.sername} ${student.name}`}</TableCell>
              <TableCell>
                {subject.semesters[semester - 1].assessmentType !== 1 ? (
                  <TextField
                    onChange={setStudentsMark(
                      student._id,
                      subject._id,
                      semester
                    )}
                    value={
                      student.subjects.find((i) => i._id === subject._id)
                        .semesters[semester - 1].mark || ""
                    }
                    size="small"
                    onBlur={markInputHandle(student._id)}
                  />
                ) : (
                  <Box width={"50px"}>
                    <FormControl fullWidth>
                      <Select
                        value={
                          student.subjects.find((i) => i.name === subject.name)
                            .semesters[semester - 1].mark || ""
                        }
                        onChange={setStudentsMark(
                          student._id,
                          subject._id,
                          semester,
                          saveStudent
                        )}
                      >
                        <MenuItem value={undefined}>...</MenuItem>
                        <MenuItem value={"Зараховано"}>Зараховано</MenuItem>
                        <MenuItem value={"Незараховано"}>Незараховано</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={
                    student.subjects.find((i) => i._id === subject._id)
                      .semesters[semester - 1].reDelivery
                  }
                  onChange={setStudentRedelivery(
                    student._id,
                    subject._id,
                    semester,
                    saveStudent
                  )}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
