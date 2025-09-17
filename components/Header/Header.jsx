import {
  AppBar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import { useToken } from "../../redux/selectors";
import { ContainerCustom } from "../Container/Container";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutOperation } from "../../redux/operations";
import { MobileNvaigation } from "./MobileNavigation";
import Link from "next/link";
import { useAppSatate } from "../../redux/selectors";
import { useStudent } from "../../redux/selectors";

const StyledHeader = styled(AppBar)`
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  margin-bottom: 20px;
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
  const appState = useAppSatate();
  const student = useStudent();

  const logout = () => {
    dispatch(logoutOperation(token));
  };

  console.log(student);

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
          <Typography color={"text.primary"} variant={"h1"}>
            Web Заліковка
          </Typography>
        </LinkStyled>
        {!isPhone && (
          <>
            {token && (
              <Navigation component={"nav"}>
                <LinkStyled href={"/plan"}>
                  <Typography color={"text.primary"} variant={"body1"}>
                    Індивідуальний план
                  </Typography>
                </LinkStyled>
                <LinkStyled href={"/marks"}>
                  <Typography color={"text.primary"} variant={"body1"}>
                    Оцінки
                  </Typography>
                </LinkStyled>
                {appState?.openForSelectSubject && student?.course === 1 && (
                  <LinkStyled href={"/selectable"}>
                    <Typography color={"text.primary"} variant={"body1"}>
                      Вибіркові предмети
                    </Typography>
                  </LinkStyled>
                )}
              </Navigation>
            )}
            {!token ? (
              <Button onClick={() => router.push("/signin")}>
                <Typography color={"text.primary"} variant={"body1"}>
                  Увійти
                </Typography>
              </Button>
            ) : (
              <Button onClick={logout}>
                <Typography color={"text.primary"} variant={"body1"}>
                  Вийти
                </Typography>
              </Button>
            )}
          </>
        )}
        {isPhone && <MobileNvaigation logout={logout} />}
      </ContainerCustom>
    </StyledHeader>
  );
};
