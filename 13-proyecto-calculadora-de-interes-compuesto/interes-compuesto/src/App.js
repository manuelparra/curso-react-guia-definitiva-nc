import { Formik, Form } from 'formik'
import { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'
import Balance from './components/Balance'

const compoundInteres = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('es-ES', {
  style: 'currency', 
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const App = () => {
  const [balance, setBalance] = useState('')
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInteres(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val)) 
  }

  return (
    <Container>
      <Section>
        <Formik 
          initialValues={{
            deposit: '', 
            contribution: '', 
            years: '', 
            rate: '', 
          }} 
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Depósito inicial" />
            <Input name="contribution" label="Contribución anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interes estimado" />
            <Button>Calcular</Button>
          </Form>
        </Formik>
        {balance !== '' ? <Balance>My balance final: {balance}</Balance> : null}
      </Section>
    </Container>
  )
}

export default App
