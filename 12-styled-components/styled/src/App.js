import styled from 'styled-components'

const P = styled.p`
  font-size: 24px;
  color: red;
`

const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'yellow'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  margin-top: 3px;
  margin-lef: 3px;
  margin-right: 3px;
  border: solid 2pk red;
  border-radius: 4px;
  cursor: pointer;
`

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

const Link = ({ className, children, ...props }) => {
  return <a className={className} {...props} href="https://www.manuelparra.dev" target="blank">{children}</a>
}

const StyledLink = styled(Link)`
  color: blue;
`

const App = () => {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button>Enviar</Button>
      <Button primary="true">Enviar</Button>
      <BlockButton>Enviar</BlockButton>
      <BlockButton primary="true">Enviar</BlockButton>
      <BlockButton as="a" href="#">Enviar</BlockButton>
      <br /><br />
      <Link>Link</Link>
      <br />
      <StyledLink>Link con estilo</StyledLink>
    </Content> 
  )
}

export default App
