import React /* , { useContext } */ from 'react'
import PropTypes from 'prop-types'
import { useToggle } from '../../hooks'
// import formContext from '../../context/formContext'
import StyledDropdown from './Dropdown.styled'
import DropdownLabel from './DropdownLabel'
import DropdownHeader from './DropdownHeader'
import DropdownList from './DropdownList'

const Dropdown = ({ field: { name, label, items, order } }) => {
  const [isOpen, toggleDropdown] = useToggle()
  /*
  const formHandler = useContext(formContext)

  const {
    [name]: { value: selectedValue }
  } = formHandler.formState

  const setDropdownHeader = () => {
    if (selectedValue !== '') {
      return selectedValue
    }
    return isOpen ? 'select below' : 'click to choose'
  }
*/
  return (
    <>
      <StyledDropdown
        isOpen={isOpen}
        // isSelected={selectedValue !== ''}
      >
        <DropdownLabel>{label}</DropdownLabel>
        <div>
          <DropdownHeader
            toggleDropdown={toggleDropdown}
            isOpen={isOpen}
          >
            DropdownHeader
          </DropdownHeader>
          <DropdownList
            name={name}
            items={items}
            toggleDropdown={toggleDropdown}
            isOpen={isOpen}
            order={order}
          />
        </div>
      </StyledDropdown>
    </>
  )
}

Dropdown.propTypes = {
  field: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  order: PropTypes.number
}

export default Dropdown
