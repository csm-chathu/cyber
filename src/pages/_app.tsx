import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";
import { Grid, PaletteMode } from "@mui/material";
import { themeAtom, logged, draft } from "../store";
import { useAtom } from "jotai";
import darkTheme from "../themes/dark.theme";
import lightTheme from "../themes/light.theme";
import { useTheme } from "@mui/material/styles";
import CustomizedSteppers from "../components/Molecules/stepper/stepper";
import Header from "../components/Molecules/header/header";
import { OBJ_ARR } from "../utils/constant";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const [act, setAct] = React.useState(0);
  const [obj, setObj] = React.useState(OBJ_ARR);
  const [theme, setTheme] = useAtom(themeAtom);
  const [drft, setDrft] = useAtom(draft);
  const [loggedStatus, setLogged] = useAtom(logged);
  const themePallete = useTheme();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const saveDraft = () => {
    setDrft(obj);
  };
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <Grid container>
          <Header />
          <CustomizedSteppers act={act} setAct={setAct} obj={obj} />
          <Component
            {...pageProps}
            act={act}
            setAct={setAct}
            obj={obj}
            setObj={setObj}
            saveDraft={saveDraft}
          />
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}
