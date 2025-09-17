import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { signInOperation, getAppStateOperation } from "../redux/operations";
import { useDispatch } from "react-redux";
import { Outlet } from "@/components/Outlet/Outlet";
import { useStudent } from "@/redux/selectors";
import { useRouter } from "next/router";

export default function SignInPage() {
  const [ticketCode, setTicketCode] = useState("");
  const student = useStudent();
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (student) {
      router.push("/plan");
    }
  }, [student, router]);

  const run = async (event) => {
    event.preventDefault();
    dispatch(signInOperation(ticketCode));
    dispatch(getAppStateOperation());
  };
  return (
    <Outlet>
      <Box paddingTop={10} minHeight={"60vh"}>
        <Paper
          elevation={3}
          sx={{
            width: {
              mobile: "300px",
              tablet: "600px",
            },
            height: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          component={"form"}
          onSubmit={run}
        >
          <Typography textAlign={"center"} variant="h3">
            Увійти до заліковки
          </Typography>

          <TextField
            onChange={(event) => setTicketCode(event.target.value)}
            value={ticketCode}
            label={"Номер телефону"}
            variant="standard"
            fullWidth
          />
          <Button type="submit" variant="contained">
            Увійти
          </Button>
        </Paper>
      </Box>
    </Outlet>
  );
}
