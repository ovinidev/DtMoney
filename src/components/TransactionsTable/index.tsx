import axios from "axios";
import { useContext, useEffect } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { axiosInstance } from "../../services/api";
import { Container, Td } from "./styles";

export const TransactionsTable = () => {
  const {
    data,
    setData,
  } = useContext(TransactionsContext);

  useEffect(() => {
    (async function getUser() {
      try {
        const response = await axiosInstance.get('transactions');
        setData(response.data);
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
            data &&
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <Td>{item.title}</Td>
                  <Td
                    state={item.amount > 0 ? 'deposit' : 'withdraw'}>
                    R$ {item.amount}
                  </Td>
                  <Td>{item.category}</Td>
                  <Td>20/12/2022</Td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </Container>
  )
}