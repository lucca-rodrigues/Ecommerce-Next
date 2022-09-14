import Image from "next/image";
import { useRouter } from "next/router";

import { Container, InstallmentPricing } from "./styles";

export function ProductItem({ data }) {
  const firstImage = data["images"][0]["path"]["src"];
  const productId = data["id"];
  const router = useRouter();

  function handleProductDetails() {
    // router.push(`/product_details/${productId}`);
    router.push(`/product_details/[productId]`);
    console.log("item:", data);
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
    </Container>
  );
}
