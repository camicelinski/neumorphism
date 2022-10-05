import React from 'react'
import PropTypes from 'prop-types'
import StyledDropdownList from './DropdownList.styled'
import DropdownItem from './DropdownItem'

const DropdownList = ({ name, items, toggleDropdown, isOpen, order }) => {
  const renderDropdownItems = () =>
    items.map(item => (
      <DropdownItem
        key={item.value}
        toggleDropdown={toggleDropdown}
        item={item}
        name={name}
      />
    ))

  return (
    <StyledDropdownList
      isOpen={isOpen}
      order={order}
    >
      {renderDropdownItems()}
    </StyledDropdownList>
  )
}

DropdownList.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  toggleDropdown: PropTypes.func,
  isOpen: PropTypes.bool,
  order: PropTypes.number
}

export default DropdownList
