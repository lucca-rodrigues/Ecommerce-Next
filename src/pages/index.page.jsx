import { MainBanner } from "../components/MainBanner";
import { ProductItem } from "../components/ProductItem";
import { ProductsBox } from "../components/ProductsBox";
import { ProductList } from "../api/products.js";
import { Banner1, Banner3 } from "../assets";
import { useEffect, useState } from "react";

export default function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (ProductList) setProductList(ProductList);
  }, [productList]);

  return (
    <>
      <MainBanner image={Banner1} />
      <ProductsBox>
        {productList.map((item, index) => (
          <ProductItem key={index} data={item} />
        ))}
      </ProductsBox>
    </>
  );
}
