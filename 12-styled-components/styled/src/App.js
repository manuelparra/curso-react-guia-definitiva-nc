import styled, { keyframes } from 'styled-components'

// Para evitar problemas de rendimiento con Styled Components, los componentes creados con esta librería deben
// ser creados fuera de los métodos de render, o como en este caso, fuera de nuestros componentes funcionales,
// y esto es debido a que si nosótros llegamos a crear nuestros styles-components dentro de un método de render 
// este se volveria ridiculamente lento, además tendriamos un mensaje de warning en la consola de nuestro 
// navegador indicando que el styled-component se esta creanado de manara dinamica, lo cual penaliza mucho el 
// rendimiento de los componentes

const P = styled.p`
  font-size: 24px;
  color: red;
`

const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'yellow'};
  transition: box-shadow 0.2s ease;
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  margin-top: 3px;
  margin-lef: 3px;
  margin-right: 3px;
  border: solid 2pk red;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }

  .info {
    font-size: 20px;
  }
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

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red',
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
  border-radius: 5px;
  margin-right: 10px;
`

const Password = styled(Input).attrs({
  type: 'password'
})``

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotar = styled.div`
  display: inline-block;
  margin-top: 50px;
  animation: ${girar} 2s linear infinite;
`

const App = () => {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button>Enviar</Button>
      <Button>Enviar<p className="info">Info</p></Button>
      <Button primary="true">Enviar</Button>
      <Button className="secondary">Enviar</Button>
      <BlockButton>Enviar</BlockButton>
      <BlockButton primary="true">Enviar</BlockButton>
      <BlockButton as="a" href="#">Enviar</BlockButton>
      <br /><br />
      <Link>Link</Link>
      <br />
      <StyledLink>Link con estilo</StyledLink>
      <Input color="blue" />
      <Password color="blue" />
      <br />
      <Rotar>Estoy girando</Rotar>
    </Content> 
  )
}

export default App
