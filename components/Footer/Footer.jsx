import { Typography, Button, Box } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import styled from "@emotion/styled";
import { ContainerCustom } from "../Container/Container";

const StyledFooter = styled(Box)`
  /* height: 2rem; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition-property: transform;
  transition-duration: 500ms;
  border-radius: 50%;
  &:hover {
    transform: scale(1.5);
  }
`;

export const Footer = () => {
  return (
    <StyledFooter bgcolor="primary.dark">
      <ContainerCustom
        sx={{
          height: "4rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <Typography color="white.main">Тех. підтримка:</Typography>
        <Link style={{ textDecoration: "none" }} href="tel:+380993282760">
          <Typography color="white.main">+380993282760</Typography>
        </Link>
        <StyledLink href="">
          <TelegramIcon fontSize="medium" color="white" />
        </StyledLink>
        <StyledLink href="">
          <WhatsAppIcon fontSize="medium" color="white" />
        </StyledLink>
      </ContainerCustom>
    </StyledFooter>
  );
};
