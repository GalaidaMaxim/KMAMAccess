import { Outlet } from "@/components/Outlet/Outlet";
import { Drawer } from "@/components/Drawer/Drawer";
import { getToken } from "@/service/storage";
import { useState, useEffect } from "react";
import { enableLoading, disableLoading } from "@/redux/slises";
import { useDispatch } from "react-redux";
import { Box, Table, TableCell, TableRow, TableBody } from "@mui/material";
import { getStatmentByID } from "@/service/api";
import { useRouter } from "next/router";
import { FillStatment } from "@/components/FillStatment/FillStatment";

const InfoCells = ({ name, value }) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{value}</TableCell>
    </TableRow>
  );
};

export default function Statments() {
  const [statment, setStatment] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    (async () => {
      dispatch(enableLoading());
      console.log(router.query);

      try {
        const result = await getStatmentByID(getToken(), router.query.id);
        setStatment(result);
      } catch (err) {
        console.log(err);
      }
      dispatch(disableLoading());
    })();
  }, [router.isReady]);

  const setStudentMark = () => {};

  return (
    <Outlet>
      <Drawer>
        <Box padding={"20px"}>
          {statment && (
            <>
              <h2>{statment.subject.name}</h2>
              <Box>
                <Table>
                  <InfoCells
                    name="Освітній ступінь"
                    value={statment.educationPlan.level}
                  />
                  <InfoCells name="Курс" value={statment.course} />
                  <InfoCells
                    name="профілізація"
                    value={statment.department.name}
                  />
                </Table>
              </Box>
              <Box>
                <h3>Студенти</h3>
                <FillStatment
                  semester={statment.semester}
                  subject={statment.subject}
                  students={statment.students}
                />
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </Outlet>
  );
}
