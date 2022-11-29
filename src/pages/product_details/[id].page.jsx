import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Stack } from "@mui/system";
import { ProductImagesBox } from "../../components/ProductImagesBox";
import { Button, Divider, Grid } from "@mui/material";

import { Container } from "./styles";
import { toast } from "react-toastify";
import { Colors } from "../../styles/colors";
import { ProductList } from "../../api/products";
import { ProductImages } from "../../api/product_images";
import { HandleProductColors } from "./components/handleProductColors";
import { HandleProductSizes } from "./components/handleProductSizes";
import { ProductStock } from "../../api/products_stock";
import {
  getProductDetails,
  getProductImages,
  getProductStock,
} from "./functions";

export default function ProductDetails() {
  const router = useRouter();
  const productId = Number(router.query.id);
  const [productDetails, setProductDetails] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    if (productId) {
      const details = getProductDetails(ProductList, productId);
      const productImages = getProductImages(ProductImages, productId);
      const productStock = getProductStock(ProductStock, productId);

      setProductDetails({
        ...details[0],
        stock: productStock[0]["sizes"] ?? [],
        images: productImages[0]["images"] ?? [],
        size: productStock[0]["sizes"] ?? [],
      });

      setGalleryImages(productImages[0]["images"]);
    }
  }, [productId]);

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
          <ProductImagesBox images={galleryImages} />
        </Grid>
        <Grid item md={6}>
          <Stack>
            <h3>{productDetails.brand}</h3>
          </Stack>
          <Stack mt={2}>
            <h1>{productDetails.title}</h1>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack mt={2}>
            <h2>R$ {productDetails.price}</h2>
            <h2>R$ 19,90 {`(60% off)`}</h2>
            <h5>1x de R$ 19,90* sem juros no Cartão Renner</h5>
          </Stack>

          <HandleProductColors productDetails={productDetails} />
          <HandleProductSizes productDetails={productDetails} />

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
