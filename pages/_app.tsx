import 'styles/globals.css'
import type { AppProps } from 'next/app'
import GeneralLayout from 'layouts/GeneralLayout'
import { GlobalProvider } from 'context/GlobalContext'
import { Preloader } from 'components/Loader/Preloader'
import { ThemeProvider } from 'next-themes'
import { ResultsProvider } from 'hooks/ResultsContext'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <GlobalProvider>
        <ResultsProvider>
          <Preloader backgroundColor="bg-violet-800" color="#8b5cf6" size={40}>
            <GeneralLayout>
              <Component {...pageProps} />
            </GeneralLayout>
          </Preloader>
        </ResultsProvider>
      </GlobalProvider>
    </ThemeProvider>
  )
}
