import logo from '../../assets/logo.svg'
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { useContext } from "react"
import { Button, Container, Content, Logo } from "./styles"

export const Header = () => {
  const {
    handleOpenModal,
  } = useContext(TransactionsContext)

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="dt money logo" />
        <Button
          type="button"
          onClick={handleOpenModal}
        >
          Nova transação
        </Button>
      </Content>
    </Container>
  )
}