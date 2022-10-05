import React from 'react'
import PropTypes from 'prop-types'
import StyledDropdownLabel from './DropdownLabel.styled'

const DropdownLabel = ({ children }) => <StyledDropdownLabel>{children}</StyledDropdownLabel>

DropdownLabel.propTypes = {
  children: PropTypes.node
}

export default DropdownLabel
