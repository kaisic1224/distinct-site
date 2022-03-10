import type { NextPage } from "next";
import Head from "next/head";
import Collection from "../components/Collection";
import Loader from "../components/Loader";
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

        <div className='bg-gradient-to-b from-sky-300 via-sky-200'>
          <Collection />
        </div>
        {/* render loader conditionally if length of state is equals to 0 or data fetch is not yet avaialbale ( if args.length === 0 ? return loader : return elemen) */}
      </main>
    </>
  );
};

export default Home;
