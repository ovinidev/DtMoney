import { Container, SummaryContainer, Content } from "./styles"

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable";
import { useTransactions } from "../../hooks/useTransactions";

export const Dashboard = () => {
  const {
    totalTransaction
  } = useTransactions();

  const deposit = totalTransaction('deposit');
  const withdraw = totalTransaction('withdraw');
  const subtotal = totalTransaction('total');

  return (
    <Container>
      <Content>
        <SummaryContainer>
          <Summary
            text="Entradas"
            value={deposit}
            logo={income}
          />
          <Summary
            text="Saídas"
            value={withdraw}
            logo={outcome}
            margin
          />
          <Summary
            text="Total"
            value={subtotal}
            logo={total}
            color='green'
          />
        </SummaryContainer>

        <TransactionsTable />
      </Content>
    </Container>
  )
}