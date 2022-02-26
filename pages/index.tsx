import type { NextPage } from "next";
import Head from "next/head";
import References from "../components/References";

const Home: NextPage = () => {
  console.log("nande koko sensei");
  return (
    <>
      <Head>
        <title>d1st1nct_kicks | Home</title>
        <meta property='og:title' content='d1st1nct_kicks | Home' key='title' />
        <meta name='description' content='Authentic shoe retailer' />
      </Head>

      <main>
        <References />
      </main>
    </>
  );
};

export default Home;
