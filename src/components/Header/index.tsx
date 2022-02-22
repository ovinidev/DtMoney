import { Button, Container, Content, Logo } from "./styles"
import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo src={logo} alt="dt money logo" />
        <Button type="button">Nova transação</Button>
      </Content>
    </Container>
  )
}