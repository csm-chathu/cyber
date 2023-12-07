import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";
import { Grid } from "@mui/material";
import { themeAtom } from "../store";
import { useAtom } from "jotai";
import WCMC from "../themes/light.theme";
import { useEffect, useState } from "react";
const clientSideEmotionCache = createEmotionCache();
import { organizations } from "../mock-data/organizations";


// import THEMEFILE from '../themes/${organizations.data[process?.env?.NEXT_PUBLIC_COMPANY_ID || 'WCMC']['THEME_FILE']};
// import THEMEFILE from ("../themes/"+organizations.data[process?.env?.NEXT_PUBLIC_COMPANY_ID || 'WCMC']['THEME_FILE']});


// console.log(organizations.data[process?.env?.NEXT_PUBLIC_COMPANY_ID || 'WCMC']['THEME_FILE']);


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
  // let ORG=organizations.data[process?.env?.NEXT_PUBLIC_COMPANY_ID || 'WCMC'];
  // console.log(process.env.NEXT_PUBLIC_COMPANY_ID);
  
// console.log('thid',THEMEFILE);

  return (
      /* @ts-ignore */
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={WCMC}>
        <CssBaseline />
        <Grid container>
         {/* @ts-ignore  */}
          <Component {...pageProps} />
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}
