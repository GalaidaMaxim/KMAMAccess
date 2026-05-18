import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  IconButton,
  TableSortLabel,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useRouter } from "next/router";
import { useSorting } from "@/redux/selectors";
import { useDispatch } from "react-redux";
import { setSortingField, changeSortingDirection } from "@/redux/slises";

export const StatmentsList = ({ list = [] }) => {
  const router = useRouter();
  const sorting = useSorting();
  const dispatch = useDispatch();

  console.log(sorting);

  const changeSortingValue = (field) => {
    if (field === sorting.field) {
      dispatch(changeSortingDirection());
    } else {
      dispatch(setSortingField(field));
    }
  };

  const onEdit = (id) => {
    return () => {
      router.push(`statments/${id}`);
    };
  };

  if (sorting.field === "code") {
    list.sort((a, b) =>
      sorting.type === "asc"
        ? a.code.localeCompare(b.code)
        : b.code.localeCompare(a.code)
    );
  } else if (sorting.field === "name") {
    list.sort((a, b) =>
      sorting.type === "desc"
        ? a.subject.name.localeCompare(b.subject.name)
        : b.subject.name.localeCompare(a.subject.name)
    );
  } else if (sorting.field === "department") {
    list.sort((a, b) =>
      sorting.type === "desc"
        ? a.department.name.localeCompare(b.department.name)
        : b.department.name.localeCompare(a.department.name)
    );
  } else if (sorting.field === "course") {
    list.sort((a, b) =>
      sorting.type === "desc" ? a.course - b.course : b.course - a.course
    );
  }

  console.log(list);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={sorting.field === "code"}
              direction={sorting.type}
              onClick={() => changeSortingValue("code")}
            >
              Номер
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sorting.field === "name"}
              direction={sorting.type}
              onClick={() => changeSortingValue("name")}
            >
              Предмет
            </TableSortLabel>
          </TableCell>
          <TableCell>О/С</TableCell>
          <TableCell>
            <TableSortLabel
              active={sorting.field === "department"}
              direction={sorting.type}
              onClick={() => changeSortingValue("department")}
            >
              Профілізація
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sorting.field === "course"}
              direction={sorting.type}
              onClick={() => changeSortingValue("course")}
            >
              Курс
            </TableSortLabel>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((item) => (
          <TableRow
            sx={{ backgroundColor: item.complited ? "green" : "white" }}
            key={item._id}
          >
            <TableCell>{item.code}</TableCell>
            <TableCell>{item.subject.name}</TableCell>
            <TableCell>{item.educationPlan.level}</TableCell>
            <TableCell>{item.department.name}</TableCell>
            <TableCell>{item.course}</TableCell>
            <TableCell>
              <IconButton onClick={onEdit(item._id)}>
                <AddCircleOutlineOutlinedIcon
                  color={!item.complited ? "primary" : "white"}
                />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
