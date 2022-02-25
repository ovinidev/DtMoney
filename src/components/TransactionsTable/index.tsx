import axios from "axios";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/api";
import { Container, Td } from "./styles";

export const TransactionsTable = () => {
  const [data, setData] = useState({})
  
  useEffect(() => {
    (async function getUser() {
      try {
        const response = await axiosInstance.get('transactions');
        setData(response.data)
      } catch (err) {
        console.log(err);
      }
    }())
  }, [])

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
          <tr>
            <Td>Desenvolvimento no site</Td>
            <Td state={'deposit'}>R$ 12.000</Td>
            <Td>Desenvolvimento</Td>
            <Td>20/12/2022</Td>
          </tr>
          <tr>
            <Td>Desenvolvimento no site</Td>
            <Td state={'withdraw'}>R$ -12.000</Td>
            <Td>Desenvolvimento</Td>
            <Td>20/12/2022</Td>
          </tr>
          <tr>
            <Td>Desenvolvimento no site</Td>
            <Td state={'deposit'}>R$ 12.000</Td>
            <Td>Desenvolvimento</Td>
            <Td>20/12/2022</Td>
          </tr>
          <tr>
            <Td>Desenvolvimento no site</Td>
            <Td state={'withdraw'}>R$ -12.000</Td>
            <Td>Desenvolvimento</Td>
            <Td>20/12/2022</Td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}