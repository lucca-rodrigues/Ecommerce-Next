import Image from "next/image";

import { Container, InstallmentPricing } from "./styles";
import { ProductImages } from "../../api/product_images.js";

export function ProductItem() {
  const productImages = ProductImages();

  const productImage = productImages[0]["images"][0]["path"]["src"];
  console.log(productImage);
  return (
    <Container>
      <Image src={productImage} alt="" width={300} height={300} />
      <p>Tênis Cano Baixo com Recortes Branco</p>
      <p>R$ 119.90</p>
      <InstallmentPricing>3x de R$ 39,97*</InstallmentPricing>
    </Container>
  );
}
