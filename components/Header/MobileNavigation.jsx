import {
  Drawer,
  IconButton,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { useState } from "react";
import { useToken } from "../../redux/selectors";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAppSatate } from "../../redux/selectors";
import { useStudent } from "../../redux/selectors";

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const MobileNvaigation = ({ logout = () => {} }) => {
  const [open, setOpen] = useState(false);
  const token = useToken();
  const router = useRouter();
  const appState = useAppSatate();
  const student = useStudent();
  return (
    <>
      {token ? (
        <IconButton onClick={() => setOpen(true)}>
          <MenuOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            router.push("/signin");
          }}
        >
          <ExitToAppRoundedIcon />
        </IconButton>
      )}

      <Drawer anchor="right" open={open} onClick={() => setOpen(false)}>
        <Box padding={2}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <LinkStyled href={"/plan"}>
                    <Typography color={"text.primary"} variant={"body1"}>
                      Індивідуальний план
                    </Typography>
                  </LinkStyled>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <LinkStyled href={"/marks"}>
                    <Typography color={"text.primary"} variant={"body1"}>
                      Оцінки
                    </Typography>
                  </LinkStyled>
                </TableCell>
              </TableRow>

              {appState?.openForSelectSubject && student?.course === 1 && (
                <TableRow>
                  <TableCell>
                    <LinkStyled href={"/selectable"}>
                      <Typography color={"text.primary"} variant={"body1"}>
                        Вибіркові предмети
                      </Typography>
                    </LinkStyled>
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell>
                  <Button
                    sx={{ textTransform: "none", paddingLeft: "0px" }}
                    onClick={logout}
                    endIcon={<ExitToAppRoundedIcon />}
                    color="whiteButton"
                  >
                    <Typography color={"text.primary"} variant={"body1"}>
                      Вийти
                    </Typography>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Drawer>
    </>
  );
};
