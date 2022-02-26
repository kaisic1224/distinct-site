import React from "react";
import type { NextPage } from "next";

import Head from "next/head";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - d1st1nct_kicks</title>
      </Head>
      <main className='px-8 mx-auto grid grid-cols-2'>
        <div>
          <h1 className='text-6xl font-semibold text-sky-300'>
            Interested?
            <br />
            Contact me.
          </h1>
          <form action='' className='flex flex-col gap-8'>
            <label htmlFor=''></label>
            <div className='relative'>
              <FaEnvelope className='absolute w-8 h-8 top-[2px] left-2' />
              <input
                className='pl-11 text-3xl bg-slate-400 bg-opacity-30 rounded-sm'
                type='email'
                placeholder='Enter an email'
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <Image src='/art.jpg' width={245} height={206} />
      </main>
    </>
  );
};

export default contact;
