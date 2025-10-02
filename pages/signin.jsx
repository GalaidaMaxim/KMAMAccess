import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { signInOperation, getAppStateOperation } from "../redux/operations";
import { useDispatch } from "react-redux";
import { Outlet } from "@/components/Outlet/Outlet";
import { useUser } from "@/redux/selectors";
import { useRouter } from "next/router";

export default function SignInPage() {
  const [ticketCode, setTicketCode] = useState("");
  const [password, setPassword] = useState("");

  const user = useUser();
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const run = async (event) => {
    event.preventDefault();
    dispatch(signInOperation({ ticketCode, password }));
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
            Увійти до журналу
          </Typography>

          <TextField
            onChange={(event) => setTicketCode(event.target.value)}
            value={ticketCode}
            label={"Логін"}
            variant="standard"
            fullWidth
          />
          <TextField
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            label={"passwod"}
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
