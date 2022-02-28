import { createContext, FormEvent, ReactNode, useRef, useState } from "react";
import { ITransactions } from "../interfaces/ITransactions";
import { axiosInstance } from "../services/api";

type TransactionsContextData = {
  modalIsOpen: boolean,
  handleOpenModal: () => void,
  handleCloseModal: () => void,
  typeTransaction: string,
  setTypeTransaction: React.Dispatch<React.SetStateAction<string>>,
  transactions: ITransactions[],
  setTransactions: React.Dispatch<React.SetStateAction<ITransactions[]>>,
  totalTransaction: (type: string) => number,
  handleCreateNewTransaction: (event: FormEvent) => Promise<void>,
  inputTitle: React.RefObject<HTMLInputElement>,
  inputAmount: React.MutableRefObject<RefProps>,
  inputCategory: React.RefObject<HTMLInputElement>,
};

type TransactionsProviderProps = {
  children: ReactNode
};

type RefProps = Omit<HTMLInputElement, 'value'> & {
  value: number;
};


export const TransactionsContext = createContext({} as TransactionsContextData);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  };

  function handleCloseModal() {
    setModalIsOpen(false);
  };

  const [typeTransaction, setTypeTransaction] = useState('deposit');

  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  const totalTransaction = (type: string) => {
    let total = 0;

    if (type === 'deposit') {
      transactions.forEach(item => {
        if (item.amount > 0) total += item.amount;
      });
    };

    if (type === 'withdraw') {
      transactions.forEach(item => {
        if (item.amount < 0) total += item.amount;
      });
    };

    if (type === 'total') {
      transactions.forEach(item => {
        total += item.amount;
      });
    };

    return total;
  };

  const inputTitle = useRef<HTMLInputElement>(null);
  const inputAmount = useRef<RefProps>({ value: 0 } as RefProps);
  const inputCategory = useRef<HTMLInputElement>(null);

  const getTransactionsInput = () => {
    const title = inputTitle.current?.value;
    let amount = inputAmount.current?.value;
    const category = inputCategory.current?.value;

    const createdAt = new Date();

    if (typeTransaction === 'withdraw') {
      amount = Math.abs(amount) * -1;
    };

    return {
      title,
      amount,
      category,
      type: typeTransaction,
      createdAt
    }
  };

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    
    const data = getTransactionsInput();

    const response = await axiosInstance.post('/transactions', data);

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);

    handleCloseModal();
  };

  return (
    <TransactionsContext.Provider value={{
      modalIsOpen,
      handleOpenModal,
      handleCloseModal,
      typeTransaction,
      setTypeTransaction,
      transactions,
      setTransactions,
      totalTransaction,
      handleCreateNewTransaction,
      inputTitle,
      inputAmount,
      inputCategory
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}