import { VariantProps } from "@stitches/react";
import { Container, Text, Value, Header, Logo } from "./styles";

type SummaryProps = VariantProps<typeof Container> & {
  text: string,
  value: number,
  logo: string,
}

export const Summary = ({ text, value, logo, ...rest }: SummaryProps) => {
  return (
    <Container {...rest}>
      <Header>
        <Text>{text}</Text>
        <Logo src={logo} alt="logo" />
      </Header>
      <Value>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(value)}
      </Value>
    </Container>
  )
}