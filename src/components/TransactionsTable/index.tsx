import { useEffect } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { axiosInstance, getTransactions } from "../../services/api";
import { Container, Td } from "./styles";

export const TransactionsTable = () => {
  const {
    transactions,
    setTransactions,
  } = useTransactions();

  useEffect(() => {
    (async function getUser() {
      try {
        const transactions = await getTransactions()
        setTransactions(transactions);
      } catch (err) {
        console.log(err);
      }
    }())
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map((item) => {
              return (
                <tr key={item.id}>
                  <Td>{item.title}</Td>
                  <Td
                    state={item.amount > 0 ? 'deposit' : 'withdraw'}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(item.amount)}
                  </Td>
                  <Td>{item.category}</Td>
                  <Td>
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(item.createdAt)
                    )}
                  </Td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </Container>
  )
}