import { VariantProps } from "@stitches/react"
import { Container, Text, Value, Header, Logo } from "./styles"

type SummaryProps = VariantProps<typeof Container> & {
  text: string,
  value: number,
  logo: string
}

export const Summary = ({ text, value, logo, ...rest }: SummaryProps) => {
  return (
    <Container {...rest}>
      <Header>
        <Text>{text}</Text>
        <Logo src={logo} alt="logo" />
      </Header>
      <Value>R$ {value.toFixed(3)},00</Value>
    </Container>
  )
}