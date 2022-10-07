import React from 'react'
import PropTypes from 'prop-types'
import StyledSummaryItem from './SummaryItem.styled'

const SummaryItem = ({ item }) => {
  const { label, value } = item

  return (
    <StyledSummaryItem isColor={label === 'total price'}>
      <span>{label}</span>
      <span>{value}</span>
    </StyledSummaryItem>
  )
}

SummaryItem.propTypes = {
  item: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.string
}

export default SummaryItem
