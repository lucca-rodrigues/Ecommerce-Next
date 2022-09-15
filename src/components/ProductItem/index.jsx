import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import { Colors } from "../../styles/colors";
import { getFirstImageProduct } from "../../utils/getFirstImageProduct";

import { Container, InstallmentPricing } from "./styles";

export function ProductItem({ data }) {
  const router = useRouter();
  const productId = data["id"];
  const firstImage = getFirstImageProduct(productId);

  function handleProductDetails() {
    router.push(`/product_details/${productId}`);
  }

  return (
    <Container onClick={() => handleProductDetails()}>
      <Image
        src={firstImage}
        alt=""
        width={350}
        height={350}
        style={{ borderRadius: "20px 20px 0px 0px" }}
      />
      <p>{data["title"]}</p>
      <p>{data["price"]}</p>
      <InstallmentPricing>3x de R$ 39,97*</InstallmentPricing>
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
          Ver mais
        </Button>
      </Stack>
    </Container>
  );
}
