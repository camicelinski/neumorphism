import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useToggle } from '../../hooks'
import formContext from '../../context/formContext'
import StyledCheckbox from './Checkbox.styled'
import Switcher from '../Switcher'

const Checkbox = ({ field: { name, label } }) => {
  const formHandler = useContext(formContext)

  const {
    [name]: { value: isOnValue }
  } = formHandler.formState

  const [isOn, toggleSwitch] = useToggle(isOnValue)

  const handleChange = () => {
    formHandler.handleCheckboxChange(name, !isOn)
    toggleSwitch()
  }

  return (
    <>
      <StyledCheckbox isOn={isOn}>
        <p>{label}</p>
        <Switcher
          name={name}
          isOn={isOn}
          handleChange={handleChange}
        />
      </StyledCheckbox>
    </>
  )
}

Checkbox.propTypes = {
  field: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string
}

export default Checkbox
