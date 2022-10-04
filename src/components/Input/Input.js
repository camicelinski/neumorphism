import React from 'react'
import PropTypes from 'prop-types'
import StyledInput from './Input.styled'

const Input = (props) => {
  const {
    field: { name, label, type }
  } = props

  const renderField = () => (
    <>
      <input
        type={type}
        name={name}
        id={name}
      />
      <label htmlFor={name}>{label}</label>
    </>
  )

  return (
    <>
      <StyledInput>
        {renderField()}
      </StyledInput>
    </>
  )
}

Input.propTypes = {
  field: PropTypes.object
}

export default Input
