import { useState } from 'react'
import Container from './components/Container' 
import Card from './components/Card'
import UserForm from './components/UserForm'

const App = () => {
  const [users, setUsers] = useState([])

  const submit = (user) => {
    setUsers([
      ...users, 
      user
    ])
  } 

  return (
    <div style={{ marginTop: '7%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map(x => 
              <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li> 
            )}
          </ul>    
        </Card>
      </Container>
    </div>
  );
}

export default App
