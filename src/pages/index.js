import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Akoapa Shoes official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
