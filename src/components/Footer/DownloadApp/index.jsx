import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Container, List } from "./styles";

export function DownloadApp() {
  return (
    <Container>
      <List>
        <li>
          <a
            href="//itunes.apple.com/br/app/lojas-renner/id567763947?mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple />
            <span>Disponível na AppStore</span>
          </a>
        </li>
        <li>
          <a
            href="//play.google.com/store/apps/details?id=br.com.lojasrenner&amp;hl=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay />
            <span>Disponível no Google Play</span>
          </a>
        </li>
      </List>
    </Container>
  );
}
