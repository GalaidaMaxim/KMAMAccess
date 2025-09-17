import { Typography } from "@mui/material";

export const StudentHead = ({ student }) => {
  return (
    <>
      <Typography variant="h2">{`${student.sername} ${student.name} ${student.secondName}`}</Typography>
      <Typography variant="body1">{`${student.course} ${student.level}`}</Typography>
    </>
  );
};
