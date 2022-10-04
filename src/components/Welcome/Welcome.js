import React from 'react'
import StyledWelcome from './Welcome.styled'

const Welcome = () => {
  return (
    <StyledWelcome>
      <p>
        To find out the perfect book for you, please <span>complete a short form.</span>
      </p>
      <p>
        You are only <span>3 steps</span> away from finding your next reading.
      </p>
      <p>
        Click on the button below to <span>get started!</span>
      </p>
    </StyledWelcome>
  )
}

export default Welcome
