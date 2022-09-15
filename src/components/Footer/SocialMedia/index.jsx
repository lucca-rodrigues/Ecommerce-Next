import { Container, List } from "./styles";

export function SocialMedia() {
  return (
    <Container>
      <h4>Renner nas redes sociais</h4>

      <List>
        <li>
          <a
            href="//www.instagram.com/lojasrenner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ic-instagram"></i>
            <span>I</span>
          </a>
        </li>
        <li>
          <a
            href="//br.pinterest.com/lojasrenner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ic-pinterest"></i>
            <span>P</span>
          </a>
        </li>
        <li>
          <a
            href="//www.youtube.com/user/EstiloRenner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ic-youtube"></i>
            <span>Y</span>
          </a>
        </li>
        <li>
          <a
            href="//www.facebook.com/LojasRenner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ic-facebook"></i>
            <span>F</span>
          </a>
        </li>
        <li>
          <a
            href="//twitter.com/lojas_renner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ic-twitter"></i>
            <span>T</span>
          </a>
        </li>
      </List>
    </Container>
  );
}
