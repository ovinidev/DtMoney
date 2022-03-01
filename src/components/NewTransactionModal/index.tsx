import { useTransactions } from "../../hooks/useTransactions";

import {
  Container,
  Input,
  Button,
  ButtonContainer,
} from "./styles";

import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { transparentize } from 'polished';

import Modal from 'react-modal';

export const NewTransactionModal = () => {
  const {
    handleCloseModal,
    modalIsOpen,
    setTypeTransaction,
    typeTransaction,
    handleCreateNewTransaction,
    inputTitle,
    inputAmount,
    inputCategory
  } = useTransactions();

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <Input
          placeholder="Nome"
          type="text"
          ref={inputTitle}
        />
        <Input
          placeholder="Preço"
          type="number"
          ref={inputAmount as unknown as React.RefObject<HTMLInputElement>}
        />

        <ButtonContainer>
          <Button
            margin
            type='button'
            onClick={() => setTypeTransaction('deposit')}
            css={{ background: typeTransaction === 'deposit' ? transparentize(0.9, '#33CC95') : '' }}
          >
            <img src={income} alt="" />
            <span>Entrada</span>
          </Button>

          <Button
            type='button'
            onClick={() => setTypeTransaction('withdraw')}
            css={{ background: typeTransaction === 'withdraw' ? transparentize(0.9, '#E62E4D') : '' }}
          >
            <img src={outcome} alt="" />
            <span>Saída</span>
          </Button>
        </ButtonContainer>

        <Input
          placeholder="Categoria"
          type="text"
          ref={inputCategory}
        />

        <Button
          register
          type='submit'
        >
          Cadastrar
        </Button>

      </Container>
    </Modal>

  )
}