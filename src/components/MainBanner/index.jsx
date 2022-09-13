import Image from "next/image";
import { Banner1 } from "../../assets";
import { Container } from "./styles";

export function MainBanner() {
  return (
    <Container>
      <Image src={Banner1} alt="Banner promocional para a loja" />
    </Container>
  );
}
