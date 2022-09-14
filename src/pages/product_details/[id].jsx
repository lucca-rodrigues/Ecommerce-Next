import React from "react";
import { useRouter } from "next/router";
import { Stack } from "@mui/system";
import { ProductImagesBox } from "../../components/ProductImagesBox";
import { Button, Divider, Grid, Typography } from "@mui/material";

import { Container } from "./styles";
import { ProductColor } from "../../components/ProductColor";
import { ProductSize } from "../../components/ProductSize";
import { toast } from "react-toastify";
import { Colors } from "../../styles/colors";

export default function ProductDetails() {
  const router = useRouter();

  const productId = router.query.id;

  console.log("Product ID", productId);

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
            <h3>Marca do produto</h3>
          </Stack>
          <Stack mt={2}>
            <h1>NOME DO PRODUTO</h1>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack mt={2}>
            <h2>R$ 49,90</h2>
            <h2>R$ 19,90 {`(60% off)`}</h2>
            <h5>1x de R$ 19,90* sem juros no Cartão Renner</h5>
          </Stack>
          <Stack>
            <Typography>COR</Typography>
          </Stack>
          <Stack direction="row">
            <ProductColor></ProductColor>
            <ProductColor color="blue"></ProductColor>
            <ProductColor color="red"></ProductColor>
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
