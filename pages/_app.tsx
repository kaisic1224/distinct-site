import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        {useRouter().pathname === ""}
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
