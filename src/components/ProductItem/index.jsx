import Image from "next/image";

import { Container, InstallmentPricing } from "./styles";

export function ProductItem({ data }) {
  const firstImage = data["images"][0]["path"]["src"];

  return (
    <Container>
      <Image
        src={firstImage}
        alt=""
        width={350}
        height={350}
        style={{ borderRadius: "20px 20px 0px 0px" }}
        onClick={() => console.log("item:", data)}
      />
      <p>{data["title"]}</p>
      <p>{data["price"]}</p>
      <InstallmentPricing>3x de R$ 39,97*</InstallmentPricing>
    </Container>
  );
}
