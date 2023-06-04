import { useField } from 'formik'

const Radio = ({ label, ...props }) => {
  const [field] = useField({ ...props })

  return (
    <label>
      <input type='radio' {...field} {...props} />
      {label} 
    </label>
  )
}

export default Radio
