import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/storage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "@/theme/darkTheme";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Head>
          <title>Web заліковка</title>
          <link rel="icon" href="./favicon.ico" sizes="any" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
