import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { itemInterface } from ".";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

const item: NextPage<{ item: itemInterface }> = ({ item }) => {
  const { itemID } = useRouter().query;
  return (
    <>
      <Head>
        <title>Apparel</title>
      </Head>
      <div>{itemID}</div>
      <div>{item}</div>
    </>
  );
};

export default item;

export const getStaticProps: GetStaticProps = async () => {
  // fetch data from db containing item info
  // returns props object with props that will be passed to page component
  const items = ["t-shirts", "ripped jeans", "sweaters"];
  return {
    props: { item: items[1] }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const items = ["t-shirts", "ripped jeans", "sweaters"];
  //change to dynamic routes later
  const paths = items.map((item) => {
    return { params: { itemID: item } };
  });

  return {
    paths,
    fallback: false
  };
};
