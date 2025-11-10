import { Typography, Box, Paper } from "@mui/material";
import { ContainerCustom } from "../components/Container/Container";
import { Outlet } from "@/components/Outlet/Outlet";

export default function MainPage() {
  return (
    <Outlet>
      <ContainerCustom sx={{ marginTop: "20px" }}>
        <Paper>
          <Box padding={2} display={"flex"} flexDirection={"column"} gap={3}>
            <Typography variant="h3">
              Ласкаво просимо до електронного журналу викладача.
            </Typography>

            <Typography>
              Система створена для зручного ведення обліку успішності,
              відвідуваності та навчальної активності студентів.
            </Typography>
            <Typography sx variant="body2">
              Наразі підтримується наступний функціонал
            </Typography>
            <ul>
              <li>
                <Typography>Заповнення оцінювальних відомостей</Typography>
              </li>
            </ul>
            <Typography>
              Повідомняємо, що система зараз проходить тестування, тому у разі
              виникнення помилок просимо повідомити тезнічну підтримку
            </Typography>
          </Box>
        </Paper>
      </ContainerCustom>
    </Outlet>
  );
}
