import { Component } from 'react'

class Input extends Component {
   render() {
    return (
      <input 
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

class App extends Component { 
  state = {
    nombre: '', 
    segundoNombre: '',
    apellido: '',
  }
  
  constructor(props) {
    super(props)
    this.updateSegundoNombre = this.updateSegundoNombre.bind(this)
  }

  updateNombre(v) {
    console.log(this)
    this.updateValues('nombre', v.target.value)
  }

  updateSegundoNombre(v) {
    console.log(this)
    this.updateValues('segundoNombre', v.target.value)
  }

  updateApellido = (v) => { // El método en este caso es una propiedad a la que le hemos pasado una fat arrow function
    this.updateValues('apellido', v.target.value)
  }

  updateValues(prop, value) {
    this.setState({ [prop]: value })
  }

  render() {
    return (
      <p>
        Nombre completo: {`${this.state.nombre} ${this.state.segundoNombre} ${this.state.apellido}`}
        <br />
        <Input 
          value={this.state.nombre}
          onChange={(arg) => this.updateNombre(arg)}
        />
        <Input 
          value={this.state.segundoNombre}
          onChange={this.updateSegundoNombre}
        />
        <Input
          value={this.state.apellido}
          onChange={this.updateApellido} 
        />
      </p>
    )
  }
}

export default App
