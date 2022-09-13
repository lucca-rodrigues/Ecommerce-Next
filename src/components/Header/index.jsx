import Image from "next/image";
import { Logo } from "../../assets";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Image src={Logo} alt="Vercel Logo" width={150} height={30} />
    </Container>
  );
}
