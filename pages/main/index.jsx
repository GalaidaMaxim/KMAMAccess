import { Typography, Box, Paper, Grid } from "@mui/material";
import { Outlet } from "@/components/Outlet/Outlet";
import styled from "@emotion/styled";
import { Drawer } from "@/components/Drawer/Drawer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { enableLoading, disableLoading } from "@/redux/slises";
import { useUser } from "@/redux/selectors";
import { getUserStatistic } from "@/service/api";
import { getToken } from "@/service/storage";

export default function MainPage() {
  const [stat, setStat] = useState(null);
  const user = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getToken();
    (async () => {
      dispatch(enableLoading());

      try {
        const result = await getUserStatistic(token);
        console.log(result);

        setStat(result);
      } catch (err) {
        console.log(err);
      }
      dispatch(disableLoading());
    })();
  }, []);
  return (
    <Outlet closed={true}>
      <Drawer>
        {user && (
          <Box padding={2}>
            <Typography variant="h1">{`${user?.sername} ${user?.name} ${user?.secondName}`}</Typography>
            <Box marginTop={2}>
              <Typography variant="h3">{`Відомості`}</Typography>
              <Box display={"flex"} gap={2} alignItems={"center"} marginTop={2}>
                <Typography variant="body2">{`Створені`}</Typography>
                <Typography variant="body1">{stat?.statmentsCount}</Typography>
              </Box>
              <Box display={"flex"} gap={2} alignItems={"center"} marginTop={1}>
                <Typography variant="body2">{`Незаповнені`}</Typography>
                <Typography variant="body1">
                  {stat?.uncomplitedStatments}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Drawer>
    </Outlet>
  );
}
