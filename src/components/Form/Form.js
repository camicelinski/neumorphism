import React from 'react'
import StyledForm from './Form.styled'
import Content from '../Content'
import Title from '../Title'

const Form = (props) => {
  return (
    <StyledForm>
      <Title>
        <h1>find the perfect book</h1>
      </Title>
      <Content />
    </StyledForm>
  )
}

export default Form
