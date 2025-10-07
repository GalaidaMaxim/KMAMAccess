import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const DrawerStyled = styled(Box)`
  border-right: 1px solid black;
  display: "flex";
  min-height: 100vh;
  padding: 10px;
`;

export const Drawer = ({ children }) => {
  const router = useRouter();
  const onNavigate = (path) => {
    return () => {
      router.push(`/main/${path}`);
    };
  };
  return (
    <Grid container>
      <Grid size={2}>
        <DrawerStyled>
          <Button
            onClick={onNavigate("statments")}
            variant="contained"
            fullWidth
          >
            Відомості
          </Button>
        </DrawerStyled>
      </Grid>
      <Grid size={10}>{children}</Grid>
    </Grid>
  );
};
