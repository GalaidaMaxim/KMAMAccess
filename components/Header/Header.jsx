import {
  AppBar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import { useToken, useUser } from "../../redux/selectors";
import { ContainerCustom } from "../Container/Container";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutOperation } from "../../redux/operations";
import Link from "next/link";

const StyledHeader = styled(AppBar)`
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = styled(Box)`
  display: flex;
  gap: 2rem;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const Header = () => {
  const token = useToken();
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("tablet"));
  const user = useUser();

  const logout = () => {
    dispatch(logoutOperation(token));
  };

  return (
    <StyledHeader position="static">
      <ContainerCustom
        sx={{
          height: "4rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LinkStyled href={"/"}>
          <Typography color={"white.main"} variant={"h1"}>
            Web журнал
          </Typography>
        </LinkStyled>
        {!isPhone && (
          <>
            {token && <Navigation component={"nav"}></Navigation>}
            {!token ? (
              <Button onClick={() => router.push("/signin")}>
                <Typography color={"white.main"} variant={"body1"}>
                  Увійти
                </Typography>
              </Button>
            ) : (
              <Button onClick={logout}>
                <Typography color={"white.main"} variant={"body1"}>
                  Вийти
                </Typography>
              </Button>
            )}
          </>
        )}
      </ContainerCustom>
    </StyledHeader>
  );
};
