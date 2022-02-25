import { createContext, ReactNode, useState } from "react";

type TransactionsContextData = {
  modalIsOpen: boolean,
  handleOpenModal: () => void,
  handleAfterOpenModal: () => void,
  handleCloseModal: () => void,
};

type TransactionsProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export const TransactionsContextProvider = ({ children }: TransactionsProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleAfterOpenModal() {
    console.log("Oi");
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <TransactionsContext.Provider value={{
      modalIsOpen,
      handleOpenModal,
      handleAfterOpenModal,
      handleCloseModal
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}