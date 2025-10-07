import { Typography, Box, Paper, Grid } from "@mui/material";
import { Outlet } from "@/components/Outlet/Outlet";
import { Drawer } from "@/components/Drawer/Drawer";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [statments, setStatments] = useState([]);
  useEffect(() => {}, []);
  return (
    <Outlet>
      <Drawer>Відомості</Drawer>
    </Outlet>
  );
}
