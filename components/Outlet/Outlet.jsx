import { Header } from "../Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "@/service/storage";
import { refreshInfo, getAppStateOperation } from "@/redux/operations";
import { useStudent } from "@/redux/selectors";
import { Box, CircularProgress } from "@mui/material";
import { useLoading } from "@/redux/selectors";

export const Outlet = ({ children }) => {
  const dispatch = useDispatch();
  const student = useStudent();
  const loading = useLoading();

  useEffect(() => {
    const token = getToken();
    if (!token || student) {
      return;
    }
    dispatch(getAppStateOperation());
    console.log("here");

    dispatch(refreshInfo(token));
  }, [student, dispatch]);
  return (
    <Box position={"relative"}>
      <Header />
      {children}
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
