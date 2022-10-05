import React from 'react'
import PropTypes from 'prop-types'
import StyledDropdownHeader from './DropdownHeader.styled'

const DropdownHeader = ({ toggleDropdown, isOpen, children }) => (
  <StyledDropdownHeader
    onClick={() => toggleDropdown()}
    isOpen={isOpen}
  >
    {children}
  </StyledDropdownHeader>
)

DropdownHeader.propTypes = {
  toggleDropdown: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node
}

export default DropdownHeader
