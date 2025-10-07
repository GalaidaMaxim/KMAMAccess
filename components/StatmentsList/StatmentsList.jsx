import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  IconButton,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useRouter } from "next/router";

export const StatmentsList = ({ list = [] }) => {
  const router = useRouter();
  const onEdit = (id) => {
    return () => {
      router.push(`statments/${id}`);
    };
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Номер</TableCell>
          <TableCell>Предмет</TableCell>
          <TableCell>О/С</TableCell>
          <TableCell>Профілізація</TableCell>
          <TableCell>Курс</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.code}</TableCell>
            <TableCell>{item.subject.name}</TableCell>
            <TableCell>{item.educationPlan.level}</TableCell>
            <TableCell>{item.department.name}</TableCell>
            <TableCell>{item.course}</TableCell>
            <TableCell>
              <IconButton onClick={onEdit(item._id)}>
                <AddCircleOutlineOutlinedIcon color="primary" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
