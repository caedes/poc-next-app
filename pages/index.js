import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
    </div>
  );
}
