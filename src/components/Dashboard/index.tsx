import { Summary } from "../Summary"
import { Container, SummaryContainer } from "./styles"

export const Dashboard = () => {
  return (
    <Container>
      <SummaryContainer>
        <Summary
          text="Entradas"
          value={17.400}
        />
        <Summary
          text="Saídas"
          value={1.259}
          margin
        />
        <Summary
          text="Total"
          value={16.141}
          color='green'
        />
      </SummaryContainer>
    </Container>
  )
}