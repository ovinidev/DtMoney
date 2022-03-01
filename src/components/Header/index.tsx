import logo from '../../assets/logo.svg'
import { useTransactions } from "../../hooks/useTransactions"
import { SwitchTheme } from '../Switch'
import { Button, Container, Content, Logo, ButtonContainer } from "./styles"

export const Header = () => {
  const {
    handleOpenModal,
  } = useTransactions()

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="dt money logo" />
        <ButtonContainer>
          <SwitchTheme />
          <Button
            type="button"
            onClick={handleOpenModal}
          >
            Nova transação
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  )
}