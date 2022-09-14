import { useEffect, useState } from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainBanner } from "../components/MainBanner";
import { ProductItem } from "../components/ProductItem";
import { ProductsBox } from "../components/ProductsBox";
import { ProductList } from "../api/products.js";
import { ProductImages } from "../api/product_images";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function mergeProductDataAndImages() {
    const arrayProducts = [];

    ProductList.map((item, index) => {
      if (item["id"] === ProductImages[index]["id"]) {
        arrayProducts.push({
          ...item,
          images: ProductImages[index]["images"],
        });
      }
    });
    setProducts(arrayProducts);
  }

  useEffect(() => {
    mergeProductDataAndImages();
  }, []);

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
        {products?.map((item) => (
          <ProductItem key={item?.id} data={item} />
        ))}
        {/* <ProductItem /> */}
        {/* <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem /> */}
      </ProductsBox>
      <Footer />
    </>
  );
}
