import { createContext, FormEvent, ReactNode, useRef, useState } from "react";
import { ITransactions } from "../interfaces/ITransactions";
import { axiosInstance } from "../services/api";

type TransactionsContextData = {
  modalIsOpen: boolean,
  handleOpenModal: () => void,
  handleCloseModal: () => void,
  typeTransaction: string,
  setTypeTransaction: React.Dispatch<React.SetStateAction<string>>,
  data: ITransactions[],
  setData: React.Dispatch<React.SetStateAction<ITransactions[]>>,
  totalTransaction: (type: string) => number,
  handleCreateNewTransaction: (event: FormEvent) => void,
  inputName: React.RefObject<HTMLInputElement>,
  inputPrice: React.MutableRefObject<RefProps>,
  inputCategory: React.RefObject<HTMLInputElement>,
};

type TransactionsProps = {
  children: ReactNode
};

type RefProps = Omit<HTMLInputElement, 'value'> & {
  value: number;
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

  const [typeTransaction, setTypeTransaction] = useState('deposit');

  const [data, setData] = useState<ITransactions[]>([]);

  const totalTransaction = (type: string) => {
    let total = 0;

    if (type === 'deposit') {
      data.forEach(item => {
        if (item.amount > 0) total += item.amount;
      });
    };

    if (type === 'withdraw') {
      data.forEach(item => {
        if (item.amount < 0) total += item.amount;
      });
    };

    if (type === 'total') {
      data.forEach(item => {
        total += item.amount;
      });
    };

    return total;
  };

  const inputName = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<RefProps>({ value: 0 } as RefProps);
  const inputCategory = useRef<HTMLInputElement>(null);

  const getData = () => {
    const name = inputName.current?.value;
    const price = inputPrice.current?.value;
    const category = inputCategory.current?.value;

    return { name, price, category, typeTransaction }
  };

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    const data = getData();
    
    axiosInstance.post('/transactions', data);
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
      totalTransaction,
      handleCreateNewTransaction,
      inputName,
      inputPrice,
      inputCategory
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}