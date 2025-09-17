import { Typography, Box, Paper } from "@mui/material";
import { ContainerCustom } from "../components/Container/Container";
import { Outlet } from "@/components/Outlet/Outlet";

export default function MainPage() {
  return (
    <Outlet>
      <ContainerCustom>
        <Paper>
          <Box padding={2} display={"flex"} flexDirection={"column"} gap={3}>
            <Typography variant="body1">
              <Typography component="span" variant="h2">
                {"Web-заліковка "}
              </Typography>
              — це онлайн-сервіс, створений для контролю студентами КМАМ ім. Р.
              М. Глієра їх індивідуальних планів, робочих планів та успішності.
            </Typography>
            <Typography variant="body2">
              Для отримання доступу до сервісу необхідно звернутися до деканату
              академії, де вам нададуть код доступу до вашої інформації.
            </Typography>
            <Typography variant="body2">
              У особистому кабінеті ви можете ознайомитися з предметами, які
              були додані до вашого навчального плану, та які плануються до
              вивчення протягом навчання.
            </Typography>
            <Typography variant="body2">
              На сторінки {'"'}Оцінки{'"'} ви можете ознайомитися з переліком
              предметів, які будуть вивчатися протягом певного семестру. Також
              на цій сторінці відображатимуться оцінки, отримані за певну
              дисципліну.
            </Typography>
            <Typography variant="body2">
              Звертаємо увагу, що актуальна інформація щодо оцінок починається з
              <Typography variant="h3" component={"span"}>
                {" літньої сесії 2024 року."}
              </Typography>
            </Typography>
            <Typography variant="body2">
              Також, отримання оцінки на заліку чи іспиті не є гарантією її
              миттєвого оновлення на сторінці. Основним джерелом вашої оцінки є
              документ, затверджений викладачем або екзаменатором, тобто
              відомість або залікова книжка. Обробка цієї інформації та її
              додавання в систему займає певний час.
            </Typography>
            <Typography variant="body2">
              У разі виявлення невідповідностей в індивідуальному плані або
              оцінці (наприклад, після сесії) просимо не зволікати і звернутися
              до деканату.
            </Typography>
            <Typography variant="body2"></Typography>
          </Box>
        </Paper>
      </ContainerCustom>
    </Outlet>
  );
}
