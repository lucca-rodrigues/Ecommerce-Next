import Image from "next/image";

import { Container, InstallmentPricing } from "./styles";
import { ProductImages } from "../../api/product_images.js";

export function ProductItem({ data }) {
  const firstImage = data["images"][0]["path"]["src"];

  return (
    <Container>
      <Image src={firstImage} alt="" width={300} height={300} />
      <p>{data["title"]}</p>
      <p>{data["price"]}</p>
      <InstallmentPricing>3x de R$ 39,97*</InstallmentPricing>
    </Container>
  );
}
