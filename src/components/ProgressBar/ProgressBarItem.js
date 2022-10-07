import React from 'react'
import PropTypes from 'prop-types'
import StyledProgressBarItem from './ProgressBar.styled'

const ProgressBarItem = ({ children, txt, step, num }) => {
  const isComplete = num < step

  const isActive = num === step

  return (
    <StyledProgressBarItem
      isActive={isActive}
      isComplete={isComplete}
      txt={txt}
    >
      {isComplete ? '\u2713' : children}
    </StyledProgressBarItem>
  )
}

ProgressBarItem.propTypes = {
  children: PropTypes.node,
  txt: PropTypes.string,
  step: PropTypes.number,
  num: PropTypes.number
}

export default ProgressBarItem
