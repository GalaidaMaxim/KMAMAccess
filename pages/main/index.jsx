import { Typography, Box, Paper, Grid } from "@mui/material";
import { Outlet } from "@/components/Outlet/Outlet";
import styled from "@emotion/styled";
import { Drawer } from "@/components/Drawer/Drawer";

export default function MainPage() {
  return (
    <Outlet>
      <Drawer>qwewqe</Drawer>
    </Outlet>
  );
}
