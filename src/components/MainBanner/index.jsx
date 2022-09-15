import Image from "next/image";
import { Banner1 } from "../../assets";
import { Container } from "./styles";

export function MainBanner({ image }) {
  return (
    <Container>
      <Image src={image} alt="Banner promocional para a loja" />
    </Container>
  );
}
