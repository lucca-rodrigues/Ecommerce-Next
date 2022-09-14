import { useEffect, useState } from "react";

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
      <MainBanner />
      <ProductsBox>
        {products?.map((item) => (
          <ProductItem key={item?.id} data={item} />
        ))}
      </ProductsBox>
    </>
  );
}
