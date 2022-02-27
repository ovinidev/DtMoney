import { TransactionsContext } from "../../contexts/TransactionsContext"
import { useContext } from "react"
import {
  Container,
  Input,
  Button,
  ButtonContainer,
} from "./styles";

import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import Modal from 'react-modal';

export const NewTransactionModal = () => {
  const {
    handleCloseModal,
    modalIsOpen,
    setTypeTransaction
  } = useContext(TransactionsContext);

  Modal.setAppElement('body');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      contentLabel="Example Modal"
    >
      <Button
        type='button'
        close
        onClick={handleCloseModal}>
        <img src={close} alt="fechar modal" />
      </Button>

      <Container>
        <h2>Cadastrar transação</h2>
        <Input placeholder="Nome" type="text" />
        <Input placeholder="Preço" type="number" />

        <ButtonContainer>
          <Button
            margin
            type='button'
            color='green'
            onClick={() => setTypeTransaction('deposit')}>
            <img src={income} alt="" />
            <span>Entrada</span>
          </Button>

          <Button
            type='button'
            color='red'
            onClick={() => setTypeTransaction('withdraw')}>
            <img src={outcome} alt="" />
            <span>Saída</span>
          </Button>
        </ButtonContainer>

        <Input placeholder="Categoria" type="text" />

        <Button register type='submit'>Cadastrar</Button>

      </Container>
    </Modal>

  )
}