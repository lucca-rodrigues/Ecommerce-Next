import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moda Feminina, Masculina, Infantil e Perfumes - Renner</title>
        <meta
          name="description"
          content="Moda Feminina, Masculina, Infantil e Perfumes - Renner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <footer>
        <span>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </span>
      </footer>
    </>
  );
}
