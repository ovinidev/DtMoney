import { createContext, ReactNode, useState } from "react";
import { ITransactions } from "../interfaces/ITransactions";

type TransactionsContextData = {
  modalIsOpen: boolean,
  handleOpenModal: () => void,
  handleCloseModal: () => void,
  typeTransaction: string,
  setTypeTransaction: React.Dispatch<React.SetStateAction<string>>,
  data: ITransactions[],
  setData: React.Dispatch<React.SetStateAction<ITransactions[]>>,
  totalDeposit: () => number,
  totalWithout: () => number,
  totalTransactions: () => number
};

type TransactionsProps = {
  children: ReactNode
};

export const TransactionsContext = createContext({} as TransactionsContextData);

export const TransactionsContextProvider = ({ children }: TransactionsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  };

  function handleCloseModal() {
    setModalIsOpen(false);
  };

  const [typeTransaction, setTypeTransaction] = useState('');

  const [data, setData] = useState<ITransactions[]>([]);

  const totalDeposit = () => {
    let total = 0;

    data.forEach(item => {
      if (item.amount > 0) total += item.amount;
    });

    return total
  };

  const totalWithout = () => {
    let total = 0;

    data.forEach(item => {
      if (item.amount < 0) total += item.amount;
    });

    return total
  };

  const totalTransactions = () => {
    let total = 0;

    data.forEach(item => {
      total += item.amount;
    });

    return total
  };

  return (
    <TransactionsContext.Provider value={{
      modalIsOpen,
      handleOpenModal,
      handleCloseModal,
      typeTransaction,
      setTypeTransaction,
      data,
      setData,
      totalDeposit,
      totalWithout,
      totalTransactions
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}