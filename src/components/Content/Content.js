import React from 'react'
import StyledContent from './Content.styled'
// import Welcome from '../Welcome'
import { Step2 } from '../Steps'
import Title from '../Title'

const Content = () => {
  /* const ContentComponents = {
    0: <Welcome />,
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Summary />
  } */

  return (
    <StyledContent>
      <Title>
        <h2>Step</h2>
      </Title>
      <Step2 />
    </StyledContent>
  )
}

export default Content
