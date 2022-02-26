import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign up - d1st1nct_kicks</title>
      </Head>
      <form className='flex flex-col'>
        <label htmlFor='email'>Email:</label>
        <input
          className='self-center m-4 text-gray-700 w-100'
          id='email'
          type='text'
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          className='self-center m-4 text-gray-700 w-100'
          id='password'
          type='text'
          required
        />
        <button className='self-center w-60 h-12 shadow-2xl rounded-lg bg-emerald-500'>
          Sign up
        </button>
      </form>
    </>
  );
};

export default signup;
