import axios, { AxiosResponse } from "axios";
import { ITransactions } from '../interfaces/ITransactions';

export const axiosInstance = axios.create({
  baseURL: '/api'
})

export const getTransactions = async () => {
  const response = await axiosInstance.get('transactions');
  const { transactions } = response.data;
  return transactions
}