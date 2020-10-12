import { AppProps } from "next/app"
import Head from "next/head"

import GlobalStyles from "styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Casa Nova - Allef e Sinara</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project to list items to our new house"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
