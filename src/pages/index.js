import Head from "next/head";
import { Header } from "../components/Header";
import { MainBanner } from "../components/MainBanner";
import { ProductItem } from "../components/ProductItem";
import { ProductsBox } from "../components/ProductsBox";

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
      <ProductsBox>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductsBox>

      <footer>
        <span>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </span>
      </footer>
    </>
  );
}
