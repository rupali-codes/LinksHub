import "../styles/globals.css";
import type { AppProps } from "next/app";
import GeneralLayout from "../layouts/GeneralLayout";
import { GlobalProvider } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Loader/Preloader";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  });

  return (
    <ThemeProvider defaultTheme="dark">
      <GlobalProvider>
        {!loader ? (
          <GeneralLayout>
            <Component {...pageProps} />
          </GeneralLayout>
        ) : (
          <Preloader
            backgroundColor="bg-violet-800"
            spinnerColor="#8b5cf6"
            spinnerSize={40}
          />
        )}
      </GlobalProvider>
    </ThemeProvider>
  );
}
