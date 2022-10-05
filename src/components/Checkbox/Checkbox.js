import React /* , { useContext } */ from 'react'
import PropTypes from 'prop-types'
// import { useToggle } from '../../hooks'
// import formContext from '../../context/formContext'
import StyledCheckbox from './Checkbox.styled'

const Checkbox = ({ field: { label } }) => {
  /*
  const formHandler = useContext(formContext)

  const {
    [name]: { value: isOnValue }
  } = formHandler.formState

  const [isOn, toggleSwitch] = useToggle(isOnValue)

  const handleChange = () => {
    formHandler.handleCheckboxChange(name, !isOn)
    toggleSwitch()
  }
  */

  return (
    <>
      <StyledCheckbox>
        <p>{label}</p>
      </StyledCheckbox>
    </>
  )
}

Checkbox.propTypes = {
  field: PropTypes.object,
  label: PropTypes.string
}

export default Checkbox
