import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import References from "../components/References";

const Home: NextPage = () => {
  console.log("nande koko sensei");
  return (
    <div>
      <Head>
        <title>Home | d1st1nct_kicks</title>
        <meta name='get sum shoos' content='d1st1nct_kicks' />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <References />
      </main>
    </div>
  );
};

export default Home;
