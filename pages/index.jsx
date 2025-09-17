import { Typography, Box, Paper } from "@mui/material";
import { ContainerCustom } from "../components/Container/Container";
import { Outlet } from "@/components/Outlet/Outlet";

export default function MainPage() {
  return (
    <Outlet>
      <ContainerCustom>
        <Paper>
          <Box
            padding={2}
            display={"flex"}
            flexDirection={"column"}
            gap={3}
          ></Box>
        </Paper>
      </ContainerCustom>
    </Outlet>
  );
}
