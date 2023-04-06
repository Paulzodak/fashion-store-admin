import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Head from "next/head";
import Wrapper from "./wrapper";
export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        {/* <Wrapper> */}
        <Component {...pageProps} />
        {/* </Wrapper> */}
      </Provider>
    </>
  );
}
