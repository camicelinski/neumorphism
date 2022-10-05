import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import formContext from '../../context/formContext'
import StyledDropdownItem from './DropdownItem.styled'

const DropdownItem = ({ toggleDropdown, item, name }) => {
  const formHandler = useContext(formContext)

  const { value, label } = item

  const handleDropdownChoose = () => {
    toggleDropdown()
    formHandler.handleDropdownChange(name, value)
  }

  return <StyledDropdownItem onClick={() => handleDropdownChoose()}>{label}</StyledDropdownItem>
}

DropdownItem.propTypes = {
  toggleDropdown: PropTypes.func,
  item: PropTypes.object,
  name: PropTypes.string
}

export default DropdownItem
