import Image from "next/image";
import { Logo } from "../../assets";
import { DownloadApp } from "./DownloadApp";
import { SocialMedia } from "./SocialMedia";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <SocialMedia />
      <DownloadApp />
    </Container>
  );
}
