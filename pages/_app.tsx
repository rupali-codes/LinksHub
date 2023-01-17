import "../styles/globals.css";
import type { AppProps } from "next/app";
import GeneralLayout from "../layouts/GeneralLayout";
import { GlobalProvider } from "../context/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <GeneralLayout>
        <Component {...pageProps} />
      </GeneralLayout>
    </GlobalProvider>
  );
}
