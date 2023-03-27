import './Button.css'

const Button = ({ props, children }) => {
  return (
    <button {...props} className="btn">
      {children}
    </button>
  )
}

export default Button
