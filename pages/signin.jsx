import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  IconButton,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import { signInOperation, getAppStateOperation } from "../redux/operations";
import { useDispatch } from "react-redux";
import { Outlet } from "@/components/Outlet/Outlet";
import { useUser } from "@/redux/selectors";
import { useRouter } from "next/router";
import { logging } from "@/next.config";

export default function SignInPage() {
  const [ticketCode, setTicketCode] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState("");

  const user = useUser();
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      router.push("/main");
    }
  }, [user, router]);

  const run = async (event) => {
    event.preventDefault();
    dispatch(
      signInOperation({
        ticketCode: ticketCode.trim(),
        password: password.trim(),
      }),
    );
  };

  const onShowClick = () => {
    setVisibility((prev) => !prev);
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

          <FormControl sx={{ padding: 0 }} fullWidth>
            <InputLabel htmlFor="login">Логін</InputLabel>
            <Input
              sx={{ paddingLeft: 2 }}
              id="login"
              value={ticketCode}
              onChange={(event) => setTicketCode(event.target.value)}
            />
          </FormControl>
          <FormControl sx={{ padding: 0 }} fullWidth>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
              sx={{ paddingLeft: 2 }}
              type={visibility ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton size="small" onClick={onShowClick}>
                    {visibility ? (
                      <VisibilityIcon fontSize="small" />
                    ) : (
                      <VisibilityOffIcon fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {/* <TextField
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            label={"passwod"}
            variant="standard"
            fullWidth
          /> */}

          <Button type="submit" variant="contained">
            Увійти
          </Button>
        </Paper>
      </Box>
    </Outlet>
  );
}
