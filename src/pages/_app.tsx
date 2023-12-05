import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";
import { Grid } from "@mui/material";
import { themeAtom } from "../store";
import { useAtom } from "jotai";
import darkTheme from "../themes/dark.theme";
import WCMC from "../themes/light.theme";
import LADMC from "../themes/light-ladmc.theme";
import { useEffect, useState } from "react";
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const [theme, setTheme] = useAtom(themeAtom);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // const [comapny, setCompany] = useState("");

  // useEffect(() => {
  //   const AppLogo = process.env.NEXT_PUBLIC_COMPANY_ID;
  //   setCompany(AppLogo || "");
  // }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme === "dark" ? darkTheme : WCMC}>
        <CssBaseline />
        <Grid container>
          <Component {...pageProps} />
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}
