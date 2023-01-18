import "../styles/globals.css";
import type { AppProps } from "next/app";
import GeneralLayout from "../layouts/GeneralLayout";
import { GlobalProvider } from "../context/GlobalContext";
import { Preloader } from "../components/Loader/Preloader";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Loader/Spinner";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  });
  return (
    <GlobalProvider>
      {!loading ? 
        (<GeneralLayout>
          <Component {...pageProps} />
        </GeneralLayout>) :
        (<Preloader backgroundColor="bg-violet-700" spinnerColor="#8b5cf6" spinnerSize="40px" />)
      }
    </GlobalProvider>
  );
}
