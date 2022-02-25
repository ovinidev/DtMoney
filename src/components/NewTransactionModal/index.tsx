import { TransactionsContext } from "../../contexts/TransactionsContext"
import { useContext } from "react"
import {
  Container,
  ModalStyles,
  Input,
  Form,
  Button,
  ButtonContainer
} from "./styles";

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import Modal from 'react-modal';

export const NewTransactionModal = () => {
  const {
    handleAfterOpenModal,
    handleCloseModal,
    modalIsOpen
  } = useContext(TransactionsContext);

  Modal.setAppElement('body');

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={handleAfterOpenModal}
      onRequestClose={handleCloseModal}
      style={ModalStyles}
      contentLabel="Example Modal"
    >
      <Container>
        <h2>Cadastrar transação</h2>
        <Form>
          <Input placeholder="Nome" type="text"/>
          <Input placeholder="Preço" type="number"/>

          <ButtonContainer>
            <Button>
              <img src={income} alt="" />
              <h3>Entrada</h3>
            </Button>

            <Button>
              <img src={outcome} alt="" />
              <h3>Entrada</h3>
            </Button>
          </ButtonContainer>

          <Input placeholder="Categoria" type="text"/>

          <Button register>Cadastrar</Button>

        </Form>
      </Container>
    </Modal>

  )
}