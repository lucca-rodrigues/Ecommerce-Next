import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Stack } from "@mui/system";
import { ProductImagesBox } from "../../components/ProductImagesBox";
import { Button, Divider, Grid, Typography } from "@mui/material";

import { Container } from "./styles";
import { ProductColor } from "../../components/ProductColor";
import { ProductSize } from "../../components/ProductSize";
import { toast } from "react-toastify";
import { Colors } from "../../styles/colors";
import { ProductList } from "../../api/products";
import { ProductImages } from "../../api/product_images";

export default function ProductDetails() {
  const router = useRouter();
  const productId = Number(router.query.id);
  const [productDetails, setProductDetails] = useState({});

  const mergeProductDataAndImages = useCallback(() => {
    const productDetails = [];

    ProductList.filter((item) => item["id"] === productId).map(
      (item, index) => {
        if (item["id"] === ProductImages[index]["id"]) {
          productDetails.push({
            ...item,
            images: ProductImages[index]["images"],
          });
        }
      }
    );

    setProductDetails(productDetails[0]);
  }, [productId]);

  useEffect(() => {
    mergeProductDataAndImages();
  }, [mergeProductDataAndImages, productId]);

  function addProductToCart() {
    toast.success("Produto adicionado ao carrinho!");
    router.push("/");
  }
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item md={6}>
          <ProductImagesBox images={[]} />
        </Grid>
        <Grid item md={6}>
          <Stack>
            <h3>{productDetails?.brand}</h3>
          </Stack>
          <Stack mt={2}>
            <h1>{productDetails?.title}</h1>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack mt={2}>
            <h2>R$ {productDetails?.price}</h2>
            <h2>R$ 19,90 {`(60% off)`}</h2>
            <h5>1x de R$ 19,90* sem juros no Cartão Renner</h5>
          </Stack>
          <Stack>
            <Typography>COR</Typography>
          </Stack>
          <Stack direction="row">
            {productDetails?.color?.map((item) => (
              <ProductColor key={item} color={item} />
            ))}
          </Stack>
          <Stack>
            <Typography>TAMANHO</Typography>
          </Stack>
          <Stack direction="row">
            <ProductSize size="P"></ProductSize>
            <ProductSize size="M"></ProductSize>
          </Stack>
          <Stack mt={5}>
            <Button
              style={{
                backgroundColor: Colors.green,
                color: Colors.white,
                width: "70%",
                margin: "0 auto",
              }}
              onClick={() => addProductToCart()}
            >
              Comprar
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
