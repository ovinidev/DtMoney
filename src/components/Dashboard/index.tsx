import { Container, SummaryContainer } from "./styles"

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";

export const Dashboard = () => {
  const {
    totalDeposit,
    totalWithout,
    totalTransactions
  } = useContext(TransactionsContext);

  const deposit = totalDeposit();
  const withdraw = totalWithout();
  const subtotal = totalTransactions();

  return (
    <Container>
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
    </Container>
  )
}