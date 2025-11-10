import { Header } from "../Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "@/service/storage";
import { refreshInfo, getAppStateOperation } from "@/redux/operations";
import { useUser } from "@/redux/selectors";
import { Box, CircularProgress } from "@mui/material";
import { useLoading } from "@/redux/selectors";
import { Footer } from "../Footer/Footer";
import { useRouter } from "next/router";

export const Outlet = ({ closed = false, children }) => {
  const dispatch = useDispatch();
  const user = useUser();
  const loading = useLoading();
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token || user) {
      return;
    }
    dispatch(getAppStateOperation());
    dispatch(refreshInfo(token));
  }, [user, dispatch]);

  useEffect(() => {
    const token = getToken();
    if (!token && !user && closed) {
      router.replace("/");
    }
    if (token && user && !closed) {
      router.replace("/main");
    }
  }, [user]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight="100vh"
      position={"relative"}
    >
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
      {loading && (
        <Box
          zIndex={3000}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.233)",

            backdropFilter: "blur(10px)",
          }}
        >
          <CircularProgress sx={{ color: "white" }} size="80px" />
        </Box>
      )}
    </Box>
  );
};
