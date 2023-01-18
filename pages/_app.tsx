import "../styles/globals.css";
import type { AppProps } from "next/app";
import GeneralLayout from "../layouts/GeneralLayout";
import { GlobalProvider } from "../context/GlobalContext";
import { Spinner } from "../components/Spinner";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  });
  return (
    <GlobalProvider>
      <GeneralLayout>
        {!loading ? (<Component {...pageProps} />) :
        (<Spinner
            backgroundColor="bg-violet-800"
            color="#8b5cf6"
            size="40px"
        />)}
      </GeneralLayout>
    </GlobalProvider>
  );
}
