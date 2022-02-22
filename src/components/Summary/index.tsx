import { VariantProps } from "@stitches/react"
import { Container, Text, Value } from "./styles"

type SummaryProps = VariantProps <typeof Container> & {
  text: string,
  value: number
}

export const Summary = ({text, value, ...rest} : SummaryProps) => {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
      <Value>R$ {value}</Value>
    </Container>
  )
}