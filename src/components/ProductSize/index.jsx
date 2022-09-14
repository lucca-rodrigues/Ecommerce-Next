import { Container } from "./styles";

export function ProductSize({ size, ...rest }) {
  return <Container {...rest}>{size}</Container>;
}
