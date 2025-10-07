import { Outlet } from "@/components/Outlet/Outlet";
import { Drawer } from "@/components/Drawer/Drawer";
import { getToken } from "@/service/storage";
import { useState, useEffect } from "react";
import { enableLoading, disableLoading } from "@/redux/slises";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { getStatmentByID } from "@/service/api";
import { useRouter } from "next/router";

export default function Statments() {
  const [statment, setStatment] = useState([]);
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
        console.log(result);
      } catch (err) {
        console.log(err);
      }
      dispatch(disableLoading());
    })();
  }, [router.isReady]);

  return (
    <Outlet>
      <Drawer>
        <Box padding={"20px"}>
          <h2>Відомості</h2>
        </Box>
      </Drawer>
    </Outlet>
  );
}
