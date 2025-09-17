import { Container } from "@mui/material";

export const ContainerCustom = ({ sx, children }) => {
  return (
    <Container
      sx={Object.assign(
        {
          maxWidth: {
            mobile: "90%",
            tablet: "736px",
            laptop: "1220px",
          },
        },
        sx
      )}
    >
      {children}
    </Container>
  );
};
