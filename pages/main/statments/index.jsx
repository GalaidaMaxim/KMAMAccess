import { Outlet } from "@/components/Outlet/Outlet";
import { Drawer } from "@/components/Drawer/Drawer";
import { getToken } from "@/service/storage";
import { useState, useEffect } from "react";
import { getStatments } from "@/service/api";
import { enableLoading, disableLoading } from "@/redux/slises";
import { useDispatch } from "react-redux";
import { StatmentsList } from "@/components/StatmentsList/StatmentsList";
import { Box } from "@mui/material";
export default function Statments() {
  const [statments, setStatments] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(enableLoading());
      try {
        const result = await getStatments(getToken());
        if (!result) {
          throw new Error("Statments loading error");
        }
        setStatments(result);
      } catch (err) {
        console.log(err);
      }
      dispatch(disableLoading());
    })();
  }, []);

  return (
    <Outlet closed={true}>
      <Drawer>
        <Box padding={"20px"}>
          <h2>Відомості</h2>
          <StatmentsList list={statments} />
        </Box>
      </Drawer>
    </Outlet>
  );
}
