import { Summary } from "../Summary"
import { Container, SummaryContainer } from "./styles"
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { TransactionsTable } from "../TransactionsTable";

export const Dashboard = () => {
  return (
    <Container>
      <SummaryContainer>
        <Summary
          text="Entradas"
          value={17.400}
          logo={income}
        />
        <Summary
          text="Saídas"
          value={-1.259}
          logo={outcome}
          margin
        />
        <Summary
          text="Total"
          value={16.141}
          logo={total}
          color='green'
        />
      </SummaryContainer>

      <TransactionsTable />
    </Container>
  )
}