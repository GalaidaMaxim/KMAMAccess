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

export const FillStatment = ({
  subject,
  semester,
  students = [],
  setStudentsMark = () => {},
}) => {
  const markInputHandle = (id) => {
    return async (event) => {
      const mark = Number.parseInt(event.target.value);
      if (mark != event.target.value && event.target.value !== "") {
        console.log("not a number");
        return;
      }
      try {
        await updateStudentPyParams(
          getToken(),
          id,
          students
            .find((item) => item._id === id)
            .subjects.find((item) => item._id === subject._id)
        );
      } catch (err) {
        console.log(err);
      }
    };
  };

  const markInputHandleUndef = (index, name) => {
    return async (event) => {
      students[index].subjects.find((item) => item.name === name).semesters[
        semester - 1
      ].mark = event.target.value;
      console.log(event.target.value);
    };
  };

  const redeliveryHandle = (_id, index) => {
    return async (event) => {
      const obj = JSON.parse(JSON.stringify(students[index]));
      obj.subjects.find((item) => item._id === _id).semesters[
        semester - 1
      ].reDelivery = !obj.subjects.find((item) => item._id === _id).semesters[
        semester - 1
      ].reDelivery;
    };
  };

  return (
    <Box>
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
                        onChange={markInputHandleUndef(index, subject.name)}
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
                  onChange={redeliveryHandle(subject._id, index)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
