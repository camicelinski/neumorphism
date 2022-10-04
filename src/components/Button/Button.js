import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton, StyledSubmitButton } from './Button.styled'

const Button = (props) => {
  const { type } = props

  if (type === 'submit') {
    const { value } = props
    return (
      <StyledSubmitButton
        type={'submit'}
        value={value}
      />
    )
  }

  const { handleStepChange, actionType, step, children } = props
  return (
    <StyledButton
      type={'button'}
      onClick={() => handleStepChange(actionType, step)}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  handleStepChange: PropTypes.func,
  actionType: PropTypes.string,
  step: PropTypes.number,
  children: PropTypes.node
}

export default Button
