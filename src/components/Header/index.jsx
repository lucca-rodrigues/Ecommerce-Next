import Image from "next/image";
import { useRouter } from "next/router";
import { Logo } from "../../assets";
import { Container } from "./styles";

export function Header() {
  const router = useRouter();
  return (
    <Container>
      <Image
        src={Logo}
        alt="Vercel Logo"
        width={150}
        height={30}
        onClick={() => router.push("/")}
      />
    </Container>
  );
}
