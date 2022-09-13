import Head from "next/head";
import { Header } from "../components/Header";
import { MainBanner } from "../components/MainBanner";

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
      <MainBanner />

      <footer>
        <span>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </span>
      </footer>
    </>
  );
}
